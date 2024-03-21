import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { MdOutlineMailOutline, MdPhone, MdLocationCity } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Home = () => {
  return (
    <main className="flex justify-center p-10">
      <section className="max-w-7xl space-y-5">
        <div>
          <Card>
            <CardHeader>
              <div className="bg-gray-300 rounded-sm py-1 text-center font-[900] text-lg">
                About me
              </div>
            </CardHeader>
            <CardContent>
              <p className="pt-2">
                My transition from technical support to coding was not just
                about following a career path; it was sparked by a genuine
                curiosity about the inner workings of websites and their
                potential to enhance user experiences. Programming, to me, is an
                ongoing journey of discovery and growth, driven by a love for
                learning new things and a desire to make a positive impact in
                the digital world. I pride myself on being a fast learner and
                pay close attention to detail.
              </p>
              <p className="pt-2">
                Outside of coding, I find joy in activities like disc golf,
                where precision and focus are key. It is a sport that
                complements my attention to detail and allows me to unwind and
                recharge. On rarer occasions, I indulge in video games,
                appreciating the immersive worlds they offer and the opportunity
                to explore new narratives. These hobbies not only provide
                balance to my life but also teach me valuable lessons in
                strategy, patience, and adaptability, all of which I bring to my
                work as a developer.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-stretch gap-5">
          <div className="space-y-5">
            <Card>
              <CardHeader>
                <div className="bg-gray-300 rounded-sm py-1 text-center font-[900] text-lg">
                  Languages
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>Latvian</span>
                  <Progress value={100} />
                </div>
                <div className="flex items-center gap-2">
                  <span>English</span>
                  <Progress value={90} />
                </div>
                <div className="flex items-center gap-2">
                  <span>Russian</span>
                  <Progress value={25} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="bg-gray-300 rounded-sm py-1 text-center font-[900] text-lg">
                  Skills
                </div>
              </CardHeader>
              <div className="flex">
                <div>
                  <CardHeader className="py-2">
                    <CardTitle className="text-xl">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-start space-y-2">
                    <Badge className="text-sm whitespace-nowrap">
                      Analytic
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      Problem-solving
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      Attention to detail
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      Collaboration
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      Fast learner
                    </Badge>
                  </CardContent>
                </div>
                <div>
                  <CardHeader className="py-2">
                    <CardTitle className="text-xl">Hard Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-start space-y-2">
                    <Badge className="text-sm whitespace-nowrap">Git</Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      Javascript/Typescript
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      React/NextJS
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">NodeJS</Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      HTML & CSS
                    </Badge>
                    <Badge className="text-sm whitespace-nowrap">
                      Basic PHP
                    </Badge>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
          <div className="w-full">
            <Card className="h-full">
              <CardHeader>
                <div className="bg-gray-300 rounded-sm py-1 text-center font-[900] text-lg">
                  Professional Experience
                </div>
              </CardHeader>
              <CardHeader className="py-2">
                <CardTitle className="text-xl">Codelex</CardTitle>
                <CardDescription className="text-sm">
                  Software developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Development</AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          - Developed various projects using React/NextJS,
                          VueJS, and Angular by spending for each task 30-60
                          hours
                        </li>
                        <li>
                          - Used code ethics by writing clean code and following
                          other good practices
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Projects created</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li>
                          <h6 className="font-semibold pb-2">Blog application</h6>
                          <ul className="space-y-1 pl-2">
                            <li>
                              Created a blogging platform by using NextJS and
                              MongoDB
                            </li>
                            <li>Spent 120 hours in a month</li>
                            <li>
                              Used technology: NextJS, MongoDB, next-auth,
                              RichTextEditor
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6 className="font-semibold pb-2">Virtual wallet</h6>
                          <ul className="space-y-1 pl-2">
                            <li>
                              Created a virtual wallet platform by using NextJS
                              and MongoDB
                            </li>
                            <li>Spent 60 hours in 2 weeks.</li>
                            <li>
                              Used technology: NextJS, MongoDB, next-auth,
                              ShadcnUI, ChartJS, TailwindCSS.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6 className="font-semibold pb-2">Different CRUD applications</h6>
                          <ul className="space-y-1 pl-2">
                            <li>
                              Created various CRUD applications with React,
                              VueJS, Angular
                            </li>
                            <li>Spent around 40-60 hours on each</li>
                            <li>
                              Used technology: React, VueJS, Angular, Redux
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardHeader className="py-2">
                <CardTitle className="text-xl">Tele2 IoT</CardTitle>
                <CardDescription className="text-sm">
                  Technical support specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Testing and Quality Assurance
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li>
                          - Extensive testing of customer solutions using Tele2
                          IoT SIM cards to ensure connectivity and
                          functionality.
                        </li>
                        <li>
                          - Performed SMS, voice calls, data connections, and
                          ping tests, on various Roaming partner networks to
                          verify network reliability and performance.
                        </li>
                        <li>
                          - Collaborated with cross-functional teams to identify
                          and resolve issues, ensuring high-quality service
                          delivery to customers.
                        </li>
                        <li>
                          - Documented test results, identified defects, and
                          provided feedback to development teams for continuous
                          improvement.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Monitoring</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li>
                          - Utilized AWS monitoring tools, including AWS
                          CloudWatch and Athena, to monitor system performance
                          and troubleshoot issues.
                        </li>
                        <li>
                          - Performed AWS Athena SQL queries to retrieve and
                          analyze data for identifying and resolving network
                          issues.
                        </li>
                        <li>
                          - Used Kalix to track network performance and ensure
                          service uptime.
                        </li>
                        <li>
                          - Used Grafana for improved data visualization and
                          real-time monitoring of network health.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Technical and Customer Support
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li>
                          - Utilized the Salesforce CRM platform to manage
                          customer accounts, record communications, and track
                          issues, ensuring timely resolution.
                        </li>
                        <li>
                          - Managed SIM cards and monitored their functionality
                          via the CISCO platform, performing necessary actions
                          to maintain connectivity and resolve issues.
                        </li>
                        <li>
                          - Coordinated with third-party Roaming Partners via
                          email through Salesforce for escalated issues,
                          ensuring effective communication and resolution.
                        </li>
                        <li>
                          - Collaborated with internal teams using IT Service
                          Management (ITSM) platforms to address technical
                          issues and escalate tickets as needed.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <div className="bg-gray-300 rounded-sm py-1 text-center font-[900] text-lg">
                Contacts
              </div>
            </CardHeader>
            <CardContent className="flex justify-between">
              <div className="flex items-center gap-1">
                <MdOutlineMailOutline />
                <a href="mailto:martins.lerums@hotmail.com">
                  <span className="text-sm">martins.lerums@hotmail.com</span>
                </a>
              </div>
              <div className="flex items-center gap-1">
                <MdPhone />
                <span className="text-sm">+371 27075693</span>
              </div>
              <div className="flex items-center gap-1">
                <MdLocationCity />
                <span className="text-sm">Riga, Latvia</span>
              </div>
              <div className="flex items-center gap-1">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/martinslerums/"
                  target="_blank"
                >
                  <span className="text-sm">
                    linkedin.com/in/martinslerums/
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-1">
                <FaGithub />
                <a href="https://github.com/martinslerums" target="_blank">
                  <span className="text-sm">github.com/martinslerums</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Home;
