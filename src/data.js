import modelS from './images/model-s.jpg';
import model3 from './images/model-3.jpg';
import modelX from './images/model-x.jpg';
import modelY from './images/model-y.jpg';
import solarPanel from './images/solar-panel.jpg';
import solarRoof from './images/solar-roof.jpg';
import accessories from './images/accessories.jpg';

const data = [
  {
    title: 'Model S',
    desc: 'Order online for Touchless Delivery',
    background: modelS,
    leftBtnText: 'custome order',
    rightBtnText: 'EXISTING INVENTORY',
    isIcon: true,
  },
  {
    title: 'Model 3',
    desc: 'Order online for Touchless Delivery',
    background: model3,
    leftBtnText: 'custome order',
    rightBtnText: 'EXISTING INVENTORY',
    isIcon: false,
  },
  {
    title: 'Model X',
    desc: 'Order online for Touchless Delivery',
    background: modelX,
    leftBtnText: 'custome order',
    rightBtnText: 'EXISTING INVENTORY',
    isIcon: false,
  },
  {
    title: 'Model Y',
    desc: 'Order online for Touchless Delivery',
    background: modelY,
    leftBtnText: 'custome order',
    rightBtnText: 'EXISTING INVENTORY',
    isIcon: false,
  },
  {
    title: 'Solar Panels',
    desc: 'Lowest Cost Solar Panels in America',
    background: solarPanel,
    leftBtnText: 'ORDER NOW',
    rightBtnText: 'learn more',
    isIcon: false,
  },
  {
    title: 'Solar Roof',
    desc: 'Produce Clean Energy From Your Roof',
    background: solarRoof,
    leftBtnText: 'ORDER NOW',
    rightBtnText: 'learn more',
    isIcon: false,
  },
  {
    title: 'Accessories',
    background: accessories,
    leftBtnText: 'shop now',
    isIcon: false,
  },
];

export default data;
