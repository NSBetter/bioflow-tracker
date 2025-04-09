import React, { useState } from "react";
import ExperimentFlow from "../components/ExperimentFlow"; // ✅ 路径依据实际结构

export default function WBPage() {
  const [steps, setSteps] = useState([
    {
      step: 1,
      name: "物品准备",
      description: "主要试剂与材料：冰冷PBS（无钙镁）、RIPA裂解液（推荐：含1% NP-40、0.1% SDS、0.5% 去氧胆酸钠）、蛋白酶抑制剂混合液（PMSF等，现用现加）、磷酸酶抑制剂（若检测磷酸化蛋白）、BCA试剂盒、BSA标准液（2 mg/mL）、上样缓冲液（5×Loading Buffer，含DTT或β-ME）、微量离心管、锡箔纸、刮刀、96孔板、酶标仪、冰盒、离心机、水浴锅或加热模块",
      time: 10
    },
    {
      step: 2,
      name: "细胞收集",
      description: "贴壁细胞：1. 吸除培养液，用冰冷PBS清洗细胞2次（去除血清蛋白）。2. 加1 mL冰冷PBS，用刮刀轻轻刮下细胞，转移至1.5 mL离心管中。悬浮细胞：1. 直接收集细胞液，1000 rpm离心5分钟，去除上清。2. PBS清洗1次，重新离心，弃上清，保留细胞沉淀。",
      time: 10
    },
    {
      step: 3,
      name: "细胞裂解",
      description: "配制裂解液RIPA：蛋白酶抑制剂：PMSF=1000:10:10；2.添加冰冷RIPA裂解液（含抑制剂），没过细胞，彻底吹打混匀；3.放冰上裂解30分钟，每10分钟轻轻吹打混匀一次。",
      time: 30
    },
    {
      step: 4,
      name: "蛋白收集，离心",
      description: "4℃下12000 rpm离心15分钟，收集上清作为蛋白提取液。",
      time: 20
    },
    {
      step: 5,
      name: "BCA法蛋白浓度测定-准备标准曲线",
      description: "先打开烘箱预热。在96孔板中，将BSA标准蛋白液按如下浓度配制（蛋白标准品+PBS，单位：µg/mL）：0（0+20）、100（1+19）、200（2+18）、400（4+16）、800（8+12）、1200（12+8）、1600（16+4）、2000（20+0）；每个孔终体积为20μL",
      time: 15
    },
    {
      step: 6,
      name: "BCA法蛋白浓度测定-处理样本",
      description: "每孔中添加18μLPBS，每个孔中添加2μL样本（稀释十倍）。",
      time: 10
    },
    {
      step: 7,
      name: "BCA法蛋白浓度测定-烘箱孵育",
      description: "锡箔纸包好96孔板，放置在37℃烘箱内孵育30分钟。",
      time: 30
    },
    {
      step: 8,
      name: "BCA法蛋白浓度测定-读数和计算",
      description: "在ELISA仪上，562 nm处读取吸光值（OD），绘制标准曲线。计算样本蛋白浓度 = OD值对应浓度 × 稀释倍数（单位 µg/µL）。",
      time: 20
    },
    {
      step: 9,
      name: "保存蛋白",
      description: "使用裂解液配制1xloading buffer，根据测定的蛋白浓度，将蛋白浓度调整为2μg/mL，后续上样一孔5μL。",
      time: 15
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
