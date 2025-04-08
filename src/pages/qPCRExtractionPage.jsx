import React from "react";
import ExperimentFlow from "../components/ExperimentFlow";

const steps = [
  {
    step: 1,
    name: "实验准备：所需材料",
    description:
      "近岸蛋白 E099-01A 试剂盒（含 2× One Step SYBR Green Mix、Enzyme Mix、ROX 参考染料），RNase-free 水，RNA 模板样本，上下游引物（10 μM），无RNA酶PCR级反应管或板，微量离心机，冰盒，实时荧光定量PCR仪（支持SYBR通道）。",
    time: 15,
  },
  {
    step: 2,
    name: "实验准备：模板与引物准备",
    description:
      "确保RNA浓度适合用于qPCR（推荐范围为1–100 ng/μl）。按照引物设计规范准备上下游引物，终浓度为 0.4 μM（每个）。",
    time: 10,
  },
  {
    step: 3,
    name: "实验准备：环境与仪器",
    description:
      "所有操作应在无RNA酶污染的环境中进行。将试剂盒从-20°C取出后，置于冰上解冻，使用前轻轻混匀，避免起泡。",
    time: 10,
  },
  {
    step: 4,
    name: "反应体系配置：反应体系总量为20 μl",
    description:
      "以下为单管反应体系（20 μl）的推荐配方：\n2× One Step SYBR Green Mix：10 μl\nEnzyme Mix：1 μl\nForward Primer（10 μM）：0.4 μl\nReverse Primer（10 μM）：0.4 μl\nRNA 模板：1 μl\nRNase-free 水：7.2 μl\n**总计**：20 μl",
    time: 15,
  },
  {
    step: 5,
    name: "反应体系配置：混匀与离心",
    description:
      "将上述各组分按顺序加入到PCR管中，轻轻吹打混匀或轻旋混匀，避免剧烈震荡。轻微离心收集液滴至管底。",
    time: 10,
  },
  {
    step: 6,
    name: "荧光定量PCR程序设定：热循环参数设置",
    description:
      "请根据使用的实时荧光定量PCR仪，选择适配的ROX校正染料设置（高ROX / 低ROX / 无ROX）。\n反转录：50°C，15分钟\n初始变性：95°C，30秒\nPCR循环：95°C，10秒；60°C，30秒（采集荧光），40循环\n熔解曲线分析：60°C到95°C，按仪器设置升温。",
    time: 30,
  },
  {
    step: 7,
    name: "荧光定量PCR程序设定：启动反应",
    description:
      "将配置好的反应管或96孔板放入qPCR仪器中，运行上述程序。若使用ROX参考染料，确保设置正确（试剂盒自带ROX无需另加，依据仪器设定使用）。",
    time: 15,
  },
  {
    step: 8,
    name: "数据分析：扩增曲线观察",
    description:
      "检查每个样本是否出现典型的S型扩增曲线，Ct值应在合理范围内（如20–35）。无模板对照（NTC）应无扩增信号，或大于38。",
    time: 10,
  },
  {
    step: 9,
    name: "数据分析：熔解曲线检查",
    description:
      "熔解曲线应呈现单一峰值，表示扩增特异性良好。若出现多个峰或肩峰，提示可能有引物二聚体或非特异扩增，需优化引物或反应条件。",
    time: 10,
  },
  {
    step: 10,
    name: "结果记录与保存",
    description:
      "导出Ct值数据，进行相对表达量分析（如2^–ΔΔCt法）。保存qPCR原始数据文件和熔解曲线图，便于后续分析与复现。",
    time: 5,
  },
];

export default function QPCRExtractionPage() {
  return <ExperimentFlow title="qPCR实验流程" steps={steps} />;
}
