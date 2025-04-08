
import React from "react";
import ExperimentFlow from "../components/ExperimentFlow";

const steps = [
  {
    step: 1,
    name: "准备工作：所需材料",
    description: "RNA提取试剂：TRIzol，无RNA酶的水，无RNA酶的试管，移液器，离心机，冰浴，水浴锅，涡旋混匀器，1.5ml离心管，75%乙醇，氯仿，异丙醇。",
    time: 15,
  },
  {
    step: 2,
    name: "准备工作：样本准备",
    description: "确保细胞在6孔板中培养至合适的密度，推荐90%-100%汇合度。",
    time: 10,
  },
  {
    step: 3,
    name: "准备工作：操作前准备",
    description: "在操作前，将所有工具和试剂室温预热，确保裂解液无RNA酶污染。",
    time: 10,
  },
  {
    step: 4,
    name: "注意事项",
    description: "所有步骤中使用的试剂、移液器和器具必须严格避免RNA酶污染。尽量在冰上操作，确保RNA的稳定性。TRIzol和氯仿属于有毒化学品，操作时需佩戴适当的防护装备。",
    time: 5,
  },
  {
    step: 5,
    name: "样本处理：去除培养基",
    description: "用PBS清洗每孔细胞，去除培养基。",
    time: 5,
  },
  {
    step: 6,
    name: "样本处理：添加TRIzol裂解液",
    description: "向每个孔中加入1ml TRIzol裂解液，用移液器轻轻吹打几次，使细胞完全裂解。如果样本量大，可以将裂解液转移到1.5ml离心管中。",
    time: 10,
  },
  {
    step: 7,
    name: "样本处理：细胞裂解",
    description: "将裂解后的样本在室温下放置5-10分钟，以确保完全裂解。",
    time: 10,
  },
  {
    step: 8,
    name: "RNA提取：相分离",
    description: "向每个样本中加入氯仿（1/5体积），盖好试管，剧烈摇晃1分钟。将试管放置冰上10分钟，确保裂解液与氯仿充分混合。",
    time: 15,
  },
  {
    step: 9,
    name: "RNA提取：离心分层",
    description: "将试管放入离心机，以12000g离心10分钟，4°C。离心后，试管中将分为三层：上层水相（含RNA），中层界面，底层有机相（含DNA和蛋白质）。",
    time: 10,
  },
  {
    step: 10,
    name: "RNA提取：收集水相",
    description: "小心移取上层水相（约70%体积）到新的1.5ml离心管中，尽量避免污染中层界面和下层有机相。",
    time: 5,
  },
  {
    step: 11,
    name: "RNA提取：加入异丙醇沉淀RNA",
    description: "向水相中加入等体积的异丙醇，混匀后，置于-20°C冷藏15-30分钟，以帮助RNA沉淀。",
    time: 15,
  },
  {
    step: 12,
    name: "RNA提取：离心收集RNA沉淀",
    description: "将试管以12000g离心10分钟，4°C，收集RNA沉淀。",
    time: 10,
  },
  {
    step: 13,
    name: "RNA洗涤：加入75%乙醇",
    description: "弃去上清液后，加入1ml 75%乙醇，轻轻混匀，保证RNA沉淀被充分洗涤。",
    time: 5,
  },
  {
    step: 14,
    name: "RNA洗涤：离心去除乙醇",
    description: "在8000g下，4°C离心5分钟，以去除乙醇。",
    time: 5,
  },
  {
    step: 15,
    name: "RNA洗涤：第二次乙醇洗涤",
    description: "重复上述乙醇洗涤步骤，再次去除乙醇。",
    time: 5,
  },
  {
    step: 16,
    name: "RNA溶解：去除乙醇",
    description: "弃去乙醇后，轻轻甩干RNA沉淀。避免过度干燥，以免RNA难以溶解。",
    time: 5,
  },
  {
    step: 17,
    name: "RNA溶解：RNA溶解",
    description: "将RNA沉淀溶解在无RNA酶的水中，轻轻摇匀，确保RNA完全溶解。如果RNA沉淀较大，可以在室温下放置30分钟至1小时，帮助完全溶解。",
    time: 15,
  },
  {
    step: 18,
    name: "RNA浓度和纯度检测：浓度测定",
    description: "使用分光光度计（如Nanodrop）测定RNA的浓度。常见的RNA浓度计算公式为A260（吸光度值）。理想的A260/A280比值为1.8-2.0，表明RNA纯度良好。",
    time: 10,
  },
  {
    step: 19,
    name: "RNA浓度和纯度检测：电泳检测",
    description: "为了确认RNA的质量，可以在1%琼脂糖凝胶中进行电泳。良好的RNA样本应显示为两条清晰的带：28S rRNA带和18S rRNA带，其中28S带的强度应为18S带的两倍。",
    time: 20,
  },
  {
    step: 20,
    name: "RNA保存：保存条件",
    description: "如果RNA用于后续实验，可将其存放在-20°C或4°C。如果长期保存，应将RNA分装并存放在-80°C，避免反复冻融。",
    time: 5,
  },
];

export default function QPCRPage() {
  return <ExperimentFlow title="RNA提取实验流程" steps={steps} />;
}
