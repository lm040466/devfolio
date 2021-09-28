module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lm040466.com/`,
    // Your Name
    name: `유은정 : Eunjeong You`,
    // Main Site Title
    title: `Eunjeong You | Developer`,
    // Description that goes under your name in main bio
    description: `매 순간 최선을 다하는 개발자 : Be Myself, Do My Best`,
    // Optional: Github account URL
    github: `https://github.com/lm040466`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/eunjeong-you-0297871a5/`,
    // Content of the About Me section
    about: `건축공학과 소프트웨어를 공부한 융합형 엔지니어입니다. 열린 가치관과 실패를 두려워 하지 않는, 열정과 끈기를 가지고 있습니다. \n I am a convergence engineer who studied Architectural engineering and Software programming. I have open values, am not afraid of failure, and have passion and patience.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '롯데글로벌로지스 창고임대&운영 시스템 \'L-LIS(엘리스)\'',
        description_kor:
          ' WMS(Warehouse Management System) 모듈 기능 개발(Web Developer/DBA, 주요 개발기능:센터이고). Chamomile(Spring 기반) 프레임워크, Nexacro(JavaScript, HTML), Tibero 사용. L4 서버를 활용한 API G/W 관리',
        description:
          ' Developed function of Warehouse Management System(WMS). Representative development function: Warehouse Transfer. Using Chamomile Framework(based-on Spring), Nexacro(JavaScript, HTML), Tibero Database. Also, Manage API Gateway using L4 server.',
        link: 'https://www.lotteglogis.com/home/business/scm/system',
      },
      {
        name: '한국정보화진흥원(NIA) \'상품이미지 및 고객 주문질의 응답 AI데이터 구축\'',
        description_kor:
          ' AI 학습용 상품 이미지 검수 및 롯데마트 내 진열 상품 이미지/동영상 촬영을 통해 AI 학습용 데이터 추출',
        description:
          ' Inspect product image for AI learning and Extract image and video of products displayed at Lotte Mart.',
        link: 'https://aihub.or.kr/sites/default/files/2021-06/04.%20%5B상품%20이미지%20및%20고객%20주문질의%20응답%20데이터%20과제%5D%20상품%20이미지%20데이터.pdf',
      },
      {
        name: '개인 맞춤형 메뉴 추천 서비스\'니맛내맛\' : Your Taste My Taste',
        description_kor:
          ' 개인 맞춤형 메뉴 추천을 위한 웹 애플리케이션. 사용자의 정보(종교, 알레르기 등)를 기반으로 랜덤으로 메뉴를 추천. 추천 알고리즘으로는 콘텐츠 기반 필터링 알고리즘과 협업 필터링 알고리즘 사용. - 팀 프로젝트: 데이터베이스 모델링/회원관리 Back-end 개발/데이터 정규화',
        description:
          ' A web application for personalized menu recommendation service. Recommend randomly filtered menus according to user information such as religion and allergies. Recommended to use two algorithms: Contents-based filtering and Collaborative filtering. - Team Project: Database Modeling/Member Management Back-end Development/Data Optimization',
        link: 'https://github.com/halucinor/Your_Taste_My_Taste',
      },
      {
        name: '공장제작형(PC) 부재 정밀성 검사 시스템 : Precision Inspection System for Pre-Fabrication Concrete',
        description_kor:
          ' 영상처리를 이용한 부재 정밀성 검사 시스템. 라즈베리파이3 B+와 C++, OpenCV 라이브러리를 활용하여 개발. 아주대학교 건축전 진행 및 학부 논문 발표. - 개인 프로젝트',
        description:
          ' A System that detects errors in the production process using image processing. Developed with Raspberry3 B+ using C++ and OpenCV. Produced at the Ajou University exhibition. Presentation of undergraduate thesis. - Individual Project',
        link: 'https://drive.google.com/file/d/1Yy-Fm31bcC7jmG8FJiVbR3TNVjy6gokI/view?usp=sharing',
      },
      {
        name: '증강현실을 이용한 수원 화성의 문화 관광/교육 애플리케이션',
        description_kor:
          ' 경기 콘텐츠 진흥원에서 주최한 ‘증강현실을 이용한 수원 화성의 문화 관광/교육 콘텐츠 개발’ 참여. 수원 화성 곳곳에 POI(Point Of Interest)를 선정하고, 사용자가 해당 POI의 미션을 완료하면 스탬프를 모아 기념품과 교환하는 애플리케이션 개발. 사용자가 POI에 도착한 것은 위치와 지정된 건축물을 카메라로 인식했을 때 인정. 카메라 인식은 건축물의 Edge를 검출하여 확인. 미션은 게임이나 안내문을 읽는 것으로 이루어지는데, 오브젝트 AR을 화면상 확인할 수 있도록 개발. 3Ds Max, Android Studio 사용하여 개발. - GUI 디자인/POI 선정/3D 오브젝트 생성/애플리케이션 개발',
        description:
          ' Participated in the Suwon Hwaseong Cultural Tourism/Education Content Development Project hosted by the Gyeonggi Content Agency using AR(Augmented Reality). Developed using 3Ds Max, Android Studio. - Creating GUI/Clarified POI(Point Of Interest) through field surveys/Creating 3D objects/Application Development',
        link: 'https://bitlab.ajou.ac.kr/news/2017#h.p_TmavNVuTsl5Q',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '롯데정보통신 - 스마트로지스틱스팀',
        description: 'Web Developer / DBA, August 2020 - Present',
        link: 'https://www.ldcc.co.kr',
      },
      {
        name: 'BIT 연구실',
        description: 'Undergraduate Researcher, November 2016 - July 2017',
        link: 'https://bitlab.ajou.ac.kr/members/alumni#h.p__cQ_XGVmH_jA',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Python, C, Spring, OpenCV',
      },
      {
        name: 'Databases',
        description: 'Tibero, PostgreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'API G/W, OpenShift',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
//    {
//      resolve: `gatsby-source-filesystem`,
//      options: {
//        path: `${__dirname}/content/blog`,
//        name: `blog`,
//      },
//    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
