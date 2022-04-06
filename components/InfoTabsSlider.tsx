import Image from 'next/image'
import { informativeSlider } from '../data/informativeSlider'

// const TabContent = () => {
//   return (
//     <React.Fragment>
//       {informativeSlider.map((slider) => {
//         const { alt1, alt2, image1, image2, text, title } = slider;

//         return (
//           <TabPanel key={title}>
//             <p>{text}</p>
//             <Image src={image1} alt={alt1} />
//             {image2
//               ? <Image src={image2} alt={alt2} />
//               : null
//             }
//           </TabPanel>
//         )
//       })}
//     </React.Fragment>
//   )
// }

const InfoTabsSlider = () => {
  return (
    <div>
      {/* <Tabs>
        <TabList>
          {informativeSlider.map(({ title }) => <Tab key={title}>{title}</Tab>)}
        </TabList>
        <TabPanels>
          <TabContent />
        </TabPanels>
      </Tabs> */}
    </div>
  )
}

export default InfoTabsSlider