import { Layout } from "@components/Layout";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Accordion, accordionPrivacidadData } from "@components/Accordion";

export default function Privacidad() {
    return (
        <Layout className="">
            <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                <SectionContainer className="pt-24">
                    <PageTitle className="text-center mx-auto" type="default">
                        Política de Privacidad
                    </PageTitle>
                    <Accordion accordionData={accordionPrivacidadData} />
                </SectionContainer>
            </MotionBTTContainer>
        </Layout>
    );
}
