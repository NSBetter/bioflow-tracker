import React, { useState } from "react";

const steps = [
  {
    step: 1,
    name: "准备材料",
    description: "准备 TRIzol、RNase-free 水、1.5ml 离心管、移液器等。",
  },
  {
    step: 2,
    name: "样本准备",
    description: "确保细胞密度达到90%以上，6孔板培养。",
  },
  {
    step: 3,
    name: "添加 TRIzol",
    description: "每孔加 1ml TRIzol，充分裂解，转移至离心管中。",
  },
];

export default function QPCRExtractionCellPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [note, setNote] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setNote("");
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="card border-info mb-4 shadow-sm">
      <div className="card-body">
        {!completed ? (
          <>
            <h5 className="card-title text-info">
              Step {steps[currentStep].step}: {steps[currentStep].name}
            </h5>
            <p className="card-text text-secondary">{steps[currentStep].description}</p>
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
          <div className="alert alert-success">✅ 实验流程已完成！</div>
        )}
      </div>
    </div>
  );
}
