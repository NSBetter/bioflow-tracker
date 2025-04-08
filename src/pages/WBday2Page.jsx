import React, { useState } from "react";
import ExperimentFlow from "../components/ExperimentFlow"; // ✅ 路径依据实际结构

export default function WBPage() {
  const [steps, setSteps] = useState([
    {
      step: 1,
      name: "回收一抗",
      description: "准备一箱冰，回收孵育好的一抗。正面朝上，使用TBST清洗3次，每次五分钟。预约发光仪",
      time: 20,
    },
    {
      step: 2,
      name: "二抗孵育",
      description: "相应种属的二抗，放置在冰上，正面朝下孵育二抗，孵育一小时",
      time: 65,
    },
    {
      step: 3,
      name: "清洗",
      description: "TBST清洗三次",
      time: 15,
    },
    {
      step: 4,
      name: "准备显影",
      description: "准备物品筐，抗体湿盒、1ml枪头、移液枪、显影液（AB液）、孔板盒、垃圾桶、U盘",
      time: 40,
    },
  ]);

  const handleTemplateUpdate = (newSteps) => {
    console.log("新模板步骤：", newSteps);
    setSteps(newSteps);
  };

  return (
    <ExperimentFlow
      title="WB第二天流程"
      steps={steps}
      onTemplateUpdate={handleTemplateUpdate}
    />
  );
}
