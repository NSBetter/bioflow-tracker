import React, { useState } from "react";
import ExperimentFlow from "../components/ExperimentFlow"; // ✅ 路径依据实际结构

export default function WBPage() {
  const [steps, setSteps] = useState([
    {
      step: 1,
      name: "准备 PBS 缓冲液",
      description: "称取一定量 PBS 缓冲液，准备无菌刮刀。",
      time: 10,
    },
    {
      step: 2,
      name: "细胞裂解",
      description: "加入裂解液并在冰上孵育 15 分钟。",
      time: 15,
    },
  ]);

  const handleTemplateUpdate = (newSteps) => {
    console.log("新模板步骤：", newSteps);
    setSteps(newSteps);
  };

  return (
    <ExperimentFlow
      title="蛋白提取实验流程"
      steps={steps}
      onTemplateUpdate={handleTemplateUpdate}
    />
  );
}
