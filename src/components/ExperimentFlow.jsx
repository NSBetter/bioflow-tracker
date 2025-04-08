import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export default function ExperimentFlow({ title = "实验流程", steps = [], onTemplateUpdate }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [note, setNote] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [templateUpdated, setTemplateUpdated] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const [stepStates, setStepStates] = useState(
    steps.map((step) => ({
      ...step,
      status: "未完成",
      modificationNote: "",
    }))
  );

  const handleNext = () => {
    const updated = [...stepStates];
    if (note.trim()) {
      updated[currentStep].status = "⚠ 修改过";
      updated[currentStep].modificationNote = note;
    } else {
      updated[currentStep].status = "✅ 严格完成";
    }
    setStepStates(updated);
    setNote("");
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      const hasModifications = updated.some((s) => s.status === "⚠ 修改过");
      if (hasModifications) {
        setShowUpdatePrompt(true);
      }
    }
  };

  const handleExport = () => {
    const paragraphs = [
      new Paragraph({
        children: [new TextRun({ text: `实验记录：${title}`, bold: true, size: 28 })],
      }),
    ];

    stepStates.forEach((step) => {
      paragraphs.push(
        new Paragraph({ children: [new TextRun({ text: `\n步骤 ${step.step}：${step.name}`, bold: true })] })
      );
      paragraphs.push(new Paragraph(`预计时间：${step.time} 分钟`));
      paragraphs.push(new Paragraph(`状态：${step.status}`));
      paragraphs.push(new Paragraph(`说明：${step.description}`));
      if (step.modificationNote) {
        paragraphs.push(new Paragraph(`修改说明：${step.modificationNote}`));
      }
      paragraphs.push(new Paragraph("------------------------------"));
    });

    const doc = new Document({
      sections: [{ properties: {}, children: paragraphs }],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${title}.docx`);
    });
  };

  const handleTemplateUpdate = () => {
    if (typeof onTemplateUpdate === "function") {
      const updatedSteps = stepStates.map((s) => {
        if (s.status === "⚠ 修改过") {
          return {
            ...s,
            description: `${s.description}（修订：${s.modificationNote}）`,
            status: "未完成",
            modificationNote: "",
          };
        }
        return s;
      });
      onTemplateUpdate(updatedSteps);
      setTemplateUpdated(true);
    }
    setShowUpdatePrompt(false);
  };

  const handleResetTemplate = () => {
    if (!confirmReset) {
      setConfirmReset(true);
    } else {
      const originalSteps = steps.map((step) => ({
        ...step,
        status: "未完成",
        modificationNote: "",
      }));
      setStepStates(originalSteps);
      setCompleted(false);
      setCurrentStep(0);
      setConfirmReset(false);
      setTemplateUpdated(false);
      setShowUpdatePrompt(false);
    }
  };

  return (
    <div className="card border-info mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="text-primary fw-semibold mb-3">{title}</h4>

        {!completed ? (
          <>
            <div className="mb-2 text-end text-muted small">
              进度：Step {currentStep + 1} / {steps.length}
            </div>
            <h5 className="card-title text-info">
              Step {stepStates[currentStep].step}: {stepStates[currentStep].name}
            </h5>
            <p className="card-text text-secondary">
              {stepStates[currentStep].description}
            </p>
            <p className="text-muted small mb-3">
              ⏱ 预计时间：{stepStates[currentStep].time} 分钟
            </p>

            <div className="mb-3">
              <label className="form-label">若有修改，请输入说明：</label>
              <textarea
                className="form-control"
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="如：加入 TRIzol 后放置时间延长至 10 分钟"
              />
            </div>

            <button className="btn btn-success me-2" onClick={handleNext}>
              ✅ 完成此步骤
            </button>
          </>
        ) : (
          <>
            <div className="alert alert-success">✅ 实验流程已完成！</div>
            {showUpdatePrompt && !templateUpdated && (
              <div className="alert alert-warning">
                检测到流程中有修改，是否永久保存修改为模板？
                <div className="mt-2">
                  <button className="btn btn-sm btn-success me-2" onClick={handleTemplateUpdate}>
                    是，更新模板
                  </button>
                  <button className="btn btn-sm btn-secondary" onClick={() => setShowUpdatePrompt(false)}>
                    否，仅保存到实验记录
                  </button>
                </div>
              </div>
            )}
            <button className="btn btn-outline-primary mt-3 me-2" onClick={handleExport}>
              📥 导出实验记录（Word）
            </button>
            <button className="btn btn-outline-danger mt-3" onClick={handleResetTemplate}>
              {confirmReset ? "⚠ 确认恢复原始模板？" : "🔄 恢复原始模板"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
