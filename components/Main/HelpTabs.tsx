import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '../../stitches.config';
import banners from '../../data/banners'

const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
});

const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $pink2`,
});

const TabTrigger = styled(TabsPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: 'white',
  height: '2rem',
  fontSize: 20,
  lineHeight: 1,
  color: '$pink2',
  textTransform: 'uppercase',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$pink2' },
  '&[data-state="active"]': {
    color: '$pink2',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
});

const TabContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: '1.2rem',
  background: '$pinkMain',
  mixBlendMode: 'multiply',
  boxShadow: '-4px 4px 4px rgba(255, 255, 255, 0.25)',
});

export const HelpTabs = () => {
  return (
    <Tabs defaultValue={banners.tabs[0].text}>
      <TabsList aria-label="How to help">
        {banners.tabs.map(({ icon, text }) => {
          return <TabTrigger key={text} value="text">{text}</TabTrigger>
        })}
        {/* <TabTrigger value="tab1">Account</TabTrigger>
        <TabTrigger value="tab2">Password</TabTrigger> */}
      </TabsList>
      <TabContent value="tab1">
        <h3>{'En Psicología:'}</h3>
        <p>{'Asesorías en temas de Resiliencia, Pautas de Crianza, promoviendo el amor por la vida desde la Gestación y apoyando los cambios Psicológicos durante y después del parto.'}</p>
      </TabContent>
    </Tabs>
  )
}
