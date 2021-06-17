import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { useRouter } from 'next/router'
import tw from 'tailwind-styled-components'

const AccordionSummary_Wrapper = tw.div`
    flex w-full justify-between items-center text-white p-2
`

const AccordionSummary_Heading = tw.h2`
    md:text-2xl text-xl
`

const AccordionDetails_Wrapper = tw.h2`
    text-white text-left md:text-2xl text-xl p-2
`

const Accordion = withStyles({
  root: {
    border: '0px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid black',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export const Faqs_Accordion: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const [expanded, setExpanded] = React.useState('')

  const handleChange = (panel: any) => (event: any, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className="font-serif">
      {/* Accordion 1 */}
      <div className="mb-2">
        <Accordion
          className="!bg-grey md:max-w-[700px] lg:max-w-[815px]  m-auto select-none"
          square
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary>
            <AccordionSummary_Wrapper>
              <AccordionSummary_Heading>
                {locale === 'en' ? 'What is Netflix?' : 'Netflix क्या है?'}
              </AccordionSummary_Heading>
              <div
                className={`md:w-[26px] w-5 transform rotate-45 ${
                  expanded === 'panel1' && 'rotate-0'
                }`}
              >
                <Collapse_Icon />
              </div>
            </AccordionSummary_Wrapper>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionDetails_Wrapper>
              {locale === 'en' ? (
                <span>
                  <span>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices.
                  </span>

                  <br />
                  <br />

                  <span>
                    You can watch as much as you want, whenever you want,
                    without a single ad – all for one low monthly price.
                    There&apos;s always something new to discover, and new TV
                    shows and movies are added every week!
                  </span>
                </span>
              ) : (
                <span>
                  <span>
                    Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों
                    इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो,
                    फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.
                  </span>

                  <br />
                  <br />

                  <span>
                    आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं
                    – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा
                    कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी
                    जाती हैं!
                  </span>
                </span>
              )}
            </AccordionDetails_Wrapper>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Accordion 2 */}
      <div className="mb-2">
        <Accordion
          className="!bg-grey md:max-w-[700px] lg:max-w-[815px]  m-auto select-none"
          square
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary>
            <AccordionSummary_Wrapper>
              <AccordionSummary_Heading>
                {locale === 'en'
                  ? 'How much does Netflix cost?'
                  : 'Netflix की कीमत कितनी है?'}
              </AccordionSummary_Heading>

              <div
                className={`md:w-[26px] w-5 transform rotate-45 ${
                  expanded === 'panel2' && 'rotate-0'
                }`}
              >
                <Collapse_Icon />
              </div>
            </AccordionSummary_Wrapper>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionDetails_Wrapper>
              {locale === 'en' ? (
                <span>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                </span>
              ) : (
                <>
                  <span>
                    हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट
                    टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर
                    महीने ₹199 से ₹799 तक के प्लान. कोई एक्सट्रा कीमत या
                    कॉन्ट्रैक्ट नहीं.
                  </span>
                </>
              )}
            </AccordionDetails_Wrapper>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Accordion 3 */}
      <div className="mb-2">
        <Accordion
          className="!bg-grey md:max-w-[700px] lg:max-w-[815px]  m-auto select-none"
          square
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary>
            <AccordionSummary_Wrapper>
              <AccordionSummary_Heading>
                {locale === 'en'
                  ? 'Where can I watch?'
                  : 'मैं कहां देख सकता हूं?'}
              </AccordionSummary_Heading>

              <div
                className={`md:w-[26px] w-5 transform rotate-45 ${
                  expanded === 'panel3' && 'rotate-0'
                }`}
              >
                <Collapse_Icon />
              </div>
            </AccordionSummary_Wrapper>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionDetails_Wrapper>
              {locale === 'en' ? (
                <span>
                  <span>
                    Watch anywhere, anytime, on an unlimited number of devices.
                    Sign in with your Netflix account to watch instantly on the
                    web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                  </span>

                  <br />
                  <br />

                  <span>
                    You can also download your favourite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you&apos;re on the go and without an internet connection.
                    Take Netflix with you anywhere.
                  </span>
                </span>
              ) : (
                <>
                  <span>
                    अनलिमिटेड डिवाइस पर कहीं भी, कभी भी देखें. अपने पर्सनल
                    कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग
                    मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले
                    किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब
                    पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.
                  </span>

                  <br />
                  <br />

                  <span>
                    आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो
                    डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के
                    देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं
                    भी ले जाएं.
                  </span>
                </>
              )}
            </AccordionDetails_Wrapper>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Accordion 4 */}
      <div className="mb-2">
        <Accordion
          className="!bg-grey md:max-w-[700px] lg:max-w-[815px]  m-auto select-none"
          square
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary>
            <AccordionSummary_Wrapper>
              <AccordionSummary_Heading>
                {locale === 'en' ? 'How do I cancel?' : 'मैं कैसे कैंसल करूं?'}
              </AccordionSummary_Heading>

              <div
                className={`md:w-[26px] w-5 transform rotate-45 ${
                  expanded === 'panel4' && 'rotate-0'
                }`}
              >
                <Collapse_Icon />
              </div>
            </AccordionSummary_Wrapper>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionDetails_Wrapper>
              {locale === 'en' ? (
                <span>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </span>
              ) : (
                <>
                  <span>
                    Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और
                    कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट
                    ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना
                    अकाउंट कभी भी शुरू या बंद करें.
                  </span>
                </>
              )}
            </AccordionDetails_Wrapper>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Accordion 5 */}
      <div className="mb-2">
        <Accordion
          className="!bg-grey md:max-w-[700px] lg:max-w-[815px]  m-auto select-none"
          square
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary>
            <AccordionSummary_Wrapper>
              <AccordionSummary_Heading>
                {locale === 'en'
                  ? 'What can I watch on Netflix?'
                  : 'मैं Netflix पर क्या देख सकता/सकती हूं?'}
              </AccordionSummary_Heading>

              <div
                className={`md:w-[26px] w-5 transform rotate-45 ${
                  expanded === 'panel5' && 'rotate-0'
                }`}
              >
                <Collapse_Icon />
              </div>
            </AccordionSummary_Wrapper>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionDetails_Wrapper>
              {locale === 'en' ? (
                <span>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </span>
              ) : (
                <span>
                  <span>
                    Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों,
                    डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix
                    ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी
                    देखें.
                  </span>
                </span>
              )}
            </AccordionDetails_Wrapper>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Accordion 6 */}
      <div className="mb-2">
        <Accordion
          className="!bg-grey md:max-w-[700px] lg:max-w-[815px]  m-auto select-none"
          square
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary>
            <AccordionSummary_Wrapper>
              <AccordionSummary_Heading>
                {locale === 'en'
                  ? 'Is Netflix good for kids?'
                  : 'क्या Netflix बच्चों के लिए ठीक है?'}
              </AccordionSummary_Heading>

              <div
                className={`md:w-[26px] w-5 transform rotate-45 ${
                  expanded === 'panel6' && 'rotate-0'
                }`}
              >
                <Collapse_Icon />
              </div>
            </AccordionSummary_Wrapper>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionDetails_Wrapper>
              {locale === 'en' ? (
                <>
                  <span>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and films in their own space.
                  </span>

                  <br />
                  <br />

                  <span>
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don’t want kids to see.
                  </span>
                </>
              ) : (
                <>
                  <span>
                    आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे
                    अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं,
                    लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर
                    सकते हैं.
                  </span>

                  <br />
                  <br />

                  <span>
                    बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स
                    होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट
                    देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं
                    जिन्हें आप नहीं चाहते हैं कि बच्चे देखें.
                  </span>
                </>
              )}
            </AccordionDetails_Wrapper>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

const Collapse_Icon = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="thin-x"
      viewBox="0 0 26 26"
      className="svg-icon svg-icon-thin-x svg-closed w- h-"
      focusable="true"
    >
      <desc>collapse</desc>
      <path
        d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  </>
)
