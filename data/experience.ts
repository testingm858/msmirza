import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "al-sultan",
    company: "Al Sultan Industrial Cement",
    role: "Management Representative / QHSE Lead Auditor",
    location: "Abu Dhabi, UAE",
    startDate: "Oct 2010",
    endDate: "Present",
    current: true,
    description:
      "Owns the Quality, Health, Safety & Environment Management System (QHSEMS) end-to-end for a heavy industrial cement manufacturer — from design and certification through continual audit and improvement.",
    achievements: [
      "Developed, implemented and continually reviewed the QHSEMS to comply with ISO 9001, OHSAS 18001 and ISO 14001.",
      "Built and maintained the HSE system to meet ZonesCorp, ADDA and EAD Abu Dhabi regulatory requirements.",
      "Led GAP analyses across the organization to verify management system implementation and close compliance gaps.",
      "Coordinated third-party training providers to upskill teams on management-system requirements.",
      "Led the upgrade and integration of OHSAS 18001:2007 and legacy QHSE MS into a unified IMS aligned to ISO 9001:2015, ISO 14001:2015, ISO 45001 and the OSHAD Framework V3.1.",
    ],
    icon: "factory",
  },
  {
    id: "affordable-programmers",
    company: "Affordable Programmers",
    role: "PHP Programmer (Remote)",
    location: "USA & Canada",
    startDate: "Jul 2009",
    endDate: "Sep 2010",
    current: false,
    description:
      "Remote PHP developer building and maintaining commerce and CMS-driven websites for North American clients.",
    achievements: [
      "Built PHP websites on PHP-based frameworks, backed by MySQL, ASP.NET and supporting tools.",
      "Developed and maintained open-source storefronts and sites on Zencart, WordPress and Joomla.",
      "Delivered front-end UI functionality with JavaScript, VBScript, jQuery and Bootstrap.",
      "Performed cross-browser usability testing and QA validation across the development lifecycle.",
      "Supported data-analyst and business-intelligence tasks alongside core development work.",
    ],
    icon: "code",
  },
  {
    id: "dco-punjab",
    company: "Office of the District Coordination Officer, Govt. of Punjab",
    role: "Senior Data Processor / Network Assistant",
    location: "Gujranwala, Pakistan",
    startDate: "Aug 2006",
    endDate: "Jun 2010",
    current: false,
    description:
      "Provided technical support for network installation, configuration and troubleshooting within a government coordination office.",
    achievements: [
      "Applied the OSI model and TCP/IP suite (IP, ARP, ICMP, TCP, UDP, SMTP, FTP, TFTP) in daily support work.",
      "Implemented LAN/WAN designs using Cisco routers, switches and hubs.",
      "Managed IP addressing, subnetting and routing protocols including RIP, OSPF and EIGRP.",
      "Deployed and administered DHCP and DNS services.",
    ],
    icon: "network",
  },
  {
    id: "peak-solution",
    company: "Peak Solution",
    role: "Assistant Software Engineer",
    location: "Lahore, Pakistan",
    startDate: "2003",
    endDate: "2005",
    current: false,
    description:
      "Early-career software engineering role focused on VB programming and foundational software development practices.",
    achievements: [
      "Contributed to professional VB programming projects as part of a structured development course and team.",
    ],
    icon: "terminal",
  },
];
