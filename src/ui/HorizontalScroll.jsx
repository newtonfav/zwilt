/* eslint-disable react/prop-types */
// import cardOne from "../assets/card-one.svg";
import avatarOne from "../assets/card-two/avatar-one.svg";
import avatarTwo from "../assets/card-two/avatar-two.svg";
// import chat from "../assets/card-two/chat.svg";
import activityBar from "../assets/card-three/activity-bar.svg";
import chatTwo from "../assets/card-two/chat-two.svg";
import activityBarTwo from "../assets/card-three/activity-bar-two.svg";
import tracking from "../assets/card-three/tracking.svg";
import cardAvatarOne from "../assets/card-three/card-avatar-one.svg";
import bullet from "../assets/bullet.svg";
import bulletGreen from "../assets/bullet-green.svg";
import bulletYellow from "../assets/bullet-yellow.svg";
import ActionButton from "../ui/ActionButton";
import whiteLogo from "../assets/whitelogo.svg";
import frame1 from "../assets/card-one/frame1.svg";
import frame2 from "../assets/card-one/frame2.svg";
import frame3 from "../assets/card-one/frame3.svg";
import frame4 from "../assets/card-one/frame4.svg";
import star from "../assets/card-one/star.svg";

function HorizontalScroll() {
  const cards = [
    {
      id: "cardOne",
      header: "Onboard without the risk.",
      details: [
        "We pick the best for you to select.",
        "Thousands of vetted candidates in dozens of categories.",
        "Risk-free resource swapping for the best fit.",
      ],
      key: "a9ef",
      bullet,
    },

    {
      id: "cardTwo",
      header: "An open book.",
      details: [
        "Easy and transparent one-to-one chat with candidates.",
        "Simple and convenient payment methods.",
        "Review past ratings.",
      ],
      key: "b0e2",
      bullet: bulletYellow,
    },

    {
      id: "cardThree",
      header: "Stay in the loop.",
      details: [
        "Track your staff activity down to every minute with screenshots.",
        "Comprehensive timesheet data to process payments.",
        "Create projects to organize and assign tasks more effectively.",
      ],
      key: "9485",
      bullet: bulletGreen,
    },
  ];

  return (
    <div className="from-box1 h-screen bg-gradient-to-t to-white">
      <div className="no-scrollbar my-44 flex flex-row items-center overflow-x-auto">
        <div className="flex">
          <div className="mx-44 flex w-[400px] flex-col self-center">
            <div className="mb-6 text-[50px] font-extrabold leading-none">
              Why choose
              <br />
              Zwilt?
            </div>
            <div className="text-[20px] font-thin">
              We take complex hiring <br />
              processes - and simplify them. <br />
              Connecting you to the world’s <br /> highly qualified talent pool.
            </div>
          </div>

          {cards.map((card) => (
            <Card
              key={card.key}
              header={card.header}
              details={card.details}
              id={card.id}
              bullet={card.bullet}
              images={card.images}
            />
          ))}
        </div>
      </div>
    </div>
  );

  function Card({ header, details, bullet, id }) {
    function renderImages(id) {
      if (id === "cardOne") {
        return <CardOneImages />;
      } else if (id === "cardTwo") {
        return <CardTwoImages />;
      } else if (id === "cardThree") {
        return <CardThreeImages />;
      }
    }

    return (
      <div className="mb-8 mr-4 flex w-[1100px] items-center rounded-[20px] bg-white p-12 drop-shadow-xl">
        <div className="box1">
          <div className="mb-5 w-2/3 text-wrap text-[50px] font-bold leading-none">
            {header}
          </div>
          <div className="mb-8">
            <ul>
              {details.map((detail, index) => (
                <Details detail={detail} bullet={bullet} key={index} />
              ))}
            </ul>
          </div>
          <ActionButton text={"Learn More"} logo={whiteLogo} />
        </div>
        <div className="images">{renderImages(id)}</div>
      </div>
    );
  }
}

function Details({ detail, bullet }) {
  return (
    <li className="inline-flex items-center py-1">
      <span className="mr-3">
        <img src={bullet} alt="bullet point" />
      </span>
      <span className="text-[18px]">{detail}</span>
    </li>
  );
}

function CardOneImages() {
  return (
    <div className="relative left-[-9rem] h-[75dvh] w-[300px]">
      <img
        src={frame1}
        alt="image"
        className="absolute left-[2rem] top-[7rem] z-40"
      />
      <img
        src={frame2}
        alt="image"
        className="absolute right-[5rem] top-[1rem] z-30"
      />
      <img
        src={frame3}
        alt="image"
        className="absolute right-[8rem] top-[25rem] z-20"
      />
      <img
        src={frame4}
        alt="image"
        className="absolute left-[10rem] top-[24rem] z-10"
      />
      <img
        src={star}
        alt="image"
        className="absolute left-[22rem] top-[5rem] z-50"
      />
    </div>
  );
}

function CardTwoImages() {
  return (
    <div className="relative left-[-9rem] h-[75dvh] w-[500px]">
      <img src={chatTwo} alt="image" className="absolute left-[6rem] z-30" />
      <img src={avatarOne} alt="avatar" className="absolute left-[2rem]" />
      <img
        src={avatarTwo}
        alt="avatar"
        className="absolute left-[32rem] top-[8rem] z-40"
      />
    </div>
  );
}

function CardThreeImages() {
  return (
    <div className="relative left-[-9rem] h-[75dvh] w-[400px]">
      <img
        src={activityBarTwo}
        alt="image"
        className="absolute -top-[5rem] left-[2rem] z-20"
      />
      <img
        src={activityBar}
        alt="image"
        className="absolute left-[12rem] top-[26rem] z-30"
      />
      <img src={tracking} alt="image" className="absolute left-[6rem] z-40" />
      <img
        src={cardAvatarOne}
        alt="image"
        className="absolute left-[2xrem] top-[25rem] z-40"
      />
      <img
        src={avatarTwo}
        alt="image"
        className="absolute left-[26.5rem] top-[7rem] z-40"
      />
    </div>
  );
}

export default HorizontalScroll;
