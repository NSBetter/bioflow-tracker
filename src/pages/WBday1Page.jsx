import React, { useState } from "react";
import ExperimentFlow from "../components/ExperimentFlow"; // ✅ 路径依据实际结构

export default function WBPage() {
  const [steps, setSteps] = useState([
    {
      step: 1,
      name: "准备物品",
      description: "1杯纯水、雅酶试剂盒、2个50ml离心管、2个15ml离心管、相应数量的玻璃板、全套制胶器械、梳子、电泳液（粉剂或配好的）、配好的1xmarker、金属浴机器、转膜液（快速转膜液、无水乙醇、纯水）、转膜滤纸、甲醇、膜、TBST、脱脂奶粉、孔板包装盒、敷抗体湿盒、抗体稀释液、目标抗体、美工刀、彩色中性笔、2个冰盒、枪头、移液枪。",
      time: 15,
    },
    {
      step: 2,
      name: "准备物品",
      description: "清洗、拼好玻璃板，卡紧后准备制胶",
      time: 5,
    },
    {
      step: 3,
      name: "制胶混合液（雅酶）",
      description: "配制制胶混合液（下层液）：0.75/1.0/1.5 mm的mini胶，AB液各添加 2.0/2.7/4.0 mL；上胶前添加促凝剂40/60/80 μL",
      time: 8,
    },
    {
      step: 4,
      name: "加胶",
      description: "快速向玻璃板内加胶，添加纯水至玻璃板上沿以压平下层胶平面。开始计时15分钟等胶凝固",
      time: 5,
    },
    {
      step: 5,
      name: "制胶混合液（雅酶）",
      description: "配制制胶混合液（上层液）：0.75/1.0/1.5 mm的mini胶，AB液各添加0.5/0.75/1.0 mL；上胶前添加促凝剂10/15/20 μL",
      time: 8,
    },
    {
      step: 6,
      name: "加胶",
      description: "下层胶凝固后，倒去纯水，添加上层胶，插入梳子，计时12分钟，等胶凝固",
      time: 15,
    },
    {
      step: 7,
      name: "制备电泳液",
      description: "按照说明书配制电泳液",
      time: 5,
    },
    {
      step: 8,
      name: "金属浴",
      description: "蛋白样本进行95℃金属浴，5分钟，准备好1xmarker",
      time: 5,
    },
    {
      step: 9,
      name: "加样",
      description: "上层胶凝固后，放如电泳盒中，外层添加回收电泳液，内层添加新电泳液，没过玻璃板。拔掉梳子，按照规划好的设计加样",
      time: 20,
    },
    {
      step: 10,
      name: "开始电泳",
      description: "电泳参数：第一阶段：80V 30分钟；第二阶段：120V 60分钟。注意红黑方向，观察电泳气泡。同时进入下一步配制转膜液",
      time: 95,
    },
    {
      step: 11,
      name: "配制转膜液",
      description: "100ml快速转膜液+100ml无水乙醇+800ml去离子水",
      time: 10,
    },
    {
      step: 12,
      name: "切胶准备转膜",
      description: "电泳结束后，准备少量甲醇用以激活。打开玻璃板，切胶，面向下压在滤纸上（三明治配方：1层黑海绵+3层转膜滤纸+1层胶+1层膜+3层转膜滤纸+1层黑海绵），膜激活30秒，盖在膜上，拼好三明治，放进电泳盒，放冰盒，添加转膜液。转膜参数：300A 30分钟",
      time: 20,
    },
    {
      step: 13,
      name: "清洗",
      description: "转膜结束后，取下膜，剪切口以区分正反面。面向下放置于孔板盒中使用TBST清洗5分钟",
      time: 10,
    },
    {
      step: 14,
      name: "封闭",
      description: "使用5%脱脂牛奶进行封闭，注意膜面向上。配方：2.5g奶粉+50mlTBST。封闭时间：≥2小时",
      time: 130,
    },
    {
      step: 15,
      name: "清洗",
      description: "封闭结束后，使用TBST清洗5分钟",
      time: 5,
    },
    {
      step: 16,
      name: "裁膜",
      description: "按照目的蛋白和内参的分子量裁膜，标记清楚",
      time: 10,
    },
    {
      step: 17,
      name: "制备抗体",
      description: "按照说明书上的比例稀释一抗，包括目的蛋白和内参。复用的一抗不要超过2周",
      time: 15,
    },
    {
      step: 18,
      name: "敷一抗",
      description: "一抗没过膜，过夜孵育（超过12小时）",
      time: 720,
    },
  ]);

  const handleTemplateUpdate = (newSteps) => {
    console.log("新模板步骤：", newSteps);
    setSteps(newSteps);
  };

  return (
    <ExperimentFlow
      title="WB第一天流程"
      steps={steps}
      onTemplateUpdate={handleTemplateUpdate}
    />
  );
}
