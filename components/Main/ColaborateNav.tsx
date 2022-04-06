import Image from "next/image";
import generalIcono from "../../data/icono";
import { styled } from '../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { informativeSlider } from "../../data/informativeSlider";


// General content

const Tabs = styled(TabsPrimitive.Root, {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

// Content button

const TabsList = styled(TabsPrimitive.List, {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10rem',
});

// Styles button

const TabsTrigger = styled(TabsPrimitive.Trigger, {
    all: 'unset',
    textTransform: 'uppercase',
    padding: '0 0rem',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$3',
    fontWeight: '700',
    color: 'GrayText',
    userSelect: 'none',
    '&:hover': {
        color: 'Gray'
    },
    '&[data-state="active"]': {
        borderBottom: '0.3rem solid $pinkMain',
    },
});


const TabsContent = styled(TabsPrimitive.Content, {
    flexGrow: 1,
    padding: 5,
    backgroundColor: 'white',
    outline: 'none',
    gap: '1rem',
});

const Content = styled('div', {
    width: '100%'
})

const ContentButton = styled('div', {
    display: 'flex',
    flexDirection: "row",
    gap: '1rem',
    justifyContent: 'center'
})

const ColaborateContent = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 1rem',
    gap: '1rem'
})

const ContenImages = styled('div', {
    width: '50%',
    height: '100%'
})

const ContentText = styled('div', {
    position: 'absolute',
    background: 'black',
    width: '25rem',
    height: '19rem',
    color: 'White',
    padding: '1rem',
    opacity: '85%',
    marginTop: '-21rem',
    marginLeft: '19rem'
})
const H1 = styled('h1', {
    color: '$white',
    fontSize: '$5',
})

const P = styled('p', {
    color: '$white',
    fontSize: '$3',
})


export const NavColaborate = () => {

    return (
        <Content>
            <Tabs defaultValue="tab1">
                <TabsList>
                    <ContentButton>
                        <Image
                            src={generalIcono.iconoPsychology} />
                        <TabsTrigger value="tab1">
                            Psicologia
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton>
                        <Image
                            src={generalIcono.iconoEntrepreneurship} />
                        <TabsTrigger value="tab2">
                            Emprendimmiento
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton>
                        <Image
                            src={generalIcono.iconoValueSpirituality} />
                        <TabsTrigger value="tab3">
                            Espiritualidad y valores
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton>
                        <Image
                            src={generalIcono.iconoCarePostpartum} />
                        <TabsTrigger value="tab4">
                            Post-partum
                        </TabsTrigger>
                    </ContentButton>

                </TabsList>
                <TabsContent value="tab1">

                    <ColaborateContent>

                        {informativeSlider.PsychologyTab1.map(({ title, image, alt, text }) => {

                            return (

                                <ContenImages>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentText>
                                        <H1>{title}</H1>
                                        <P>{text}</P>
                                    </ContentText>
                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>

                </TabsContent>
                <TabsContent value="tab2">
                    <ColaborateContent>

                        {informativeSlider.EntrepreneurshipTab2.map(({ title, image, alt, text }) => {

                            return (

                                <ContenImages>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentText>
                                        <H1>{title}</H1>
                                        <P>{text}</P>
                                    </ContentText>
                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>
                </TabsContent>
                <TabsContent value="tab3">
                    <ColaborateContent>

                        {informativeSlider.ValuesTab3.map(({ title, image, alt, text }) => {

                            return (

                                <ContenImages>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentText>
                                        <H1>{title}</H1>
                                        <P>{text}</P>
                                    </ContentText>
                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>
                </TabsContent>
                <TabsContent value="tab4">
                    <ColaborateContent>

                        {informativeSlider.PostPartoTab4.map(({ title, image, alt, text }) => {

                            return (

                                <ContenImages>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentText>
                                        <H1>{title}</H1>
                                        <P>{text}</P>
                                    </ContentText>
                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>
                </TabsContent>
            </Tabs>

        </Content>
    );
}

