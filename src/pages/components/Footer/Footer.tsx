const shopMenu = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "AirTag",
  "Accessories",
  "Gift Cards",
];

const storeMenu = [
  "Find a Store",
  "Genius Bar",
  "Today at Apple",
  "Group Reservations",
  "Apple Camp",
  "Apple Store App",
  "Certified Refurbished",
  "Apple Trade In",
  "Financing",
  "Carrier Deals at Apple",
  "Order Status",
  "Shopping Help",
];

const entertainmentMenu = [
  "Apple One",
  "Apple TV+",
  "Apple Music",
  "Apple Arcade",
  "Apple Fitness+",
  "Apple News+",
  "Apple Podcasts",
  "Apple Books",
  "App Store",
];

const valuesMenu = [
  "Accessibility",
  "Education",
  "Environment",
  "Inclusion and Diversity",
  "Privacy",
  "Racial Equity and Justice",
  "Supply Chain",
];

const aboutMenu = [
  "Newsroom",
  "Apple Leadership",
  "Career Opportunities",
  "Investors",
  "Ethics & Compliance",
  "Events",
  "Contact Apple",
];

const Footer = () => {
  return (
    <div className="bg-slate-100 py-4">
      <div className="p-2 sm:p-0 sm:w-2/3 m-auto ">
        <p className="text-sm">
          {" "}
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit or for an Apple Gift Card. Trade-in value may
          be applied toward qualifying new device purchase, or added to an
          Apple Gift Card. Actual value awarded is based on receipt of a
          qualifying device matching the description provided when estimate was
          made. Sales tax may be assessed on full value of a new device
          purchase. In-store trade-in requires presentation of a valid photo ID
          (local law may require saving this information). Offer may not be
          available in all stores, and may vary between in-store and online
          trade-in. Some stores may have additional requirements. Apple or its
          trade-in partners reserve the right to refuse or limit quantity of any
          trade-in transaction for any reason. More details are available from
          Apple’s trade-in partner for trade-in and recycling of eligible
          devices. Restrictions and limitations may apply.
        </p>
        <p className="py-2 text-sm">
          Available in the U.S. on apple.com, in the Apple Store app, and at
          Apple Stores.
        </p>
        <p className="text-sm">
          To access and use all Apple Card features and products available only
          to Apple Card users, you must add Apple Card to Wallet on an iPhone or
          iPad that supports and has the latest version of iOS or iPadOS.
          Apple Card is subject to credit approval, available only for
          qualifying applicants in the United States, and issued by Goldman
          Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p className="py-2 text-sm">
          If you reside in the U.S. territories, please call Goldman Sachs at
          877-255-5923 with questions about Apple Card.
        </p>
        <p className="text-sm">
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
        <p className="py-2 text-sm">
          A subscription is required for Apple TV+.
        </p>
        <p className="text-sm">
          A subscription is required for Apple Arcade, Apple Fitness+, and
          Apple Music.
        </p>
        <div className="py-4">
          <hr />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5">
          <div>
            <span className="font-bold text-sm">Shop and Learn</span>
            {shopMenu.map((item, index) => (
              <p className="my-0.5 text-sm" key={index}>
                {item}{" "}
              </p>
            ))}

            <div className="mt-4">
              <span className="font-bold text-sm">Apple Wallet</span>
              <p className="text-sm">Wallet</p>
              <p className="my-0.5 text-sm">Apple Card</p>
              <p className="text-sm">Apple Pay</p>
              <p className="my-0.5 text-sm">Apple Cash</p>
            </div>
          </div>
          <div>
            <div>
              <span className="font-bold text-sm">Account</span>
              <p className="text-sm">Manage Your Apple ID</p>
              <p className="my-0.5 text-sm">Apple Store Account</p>
              <p className="text-sm">iCloud.com</p>
            </div>
            <div className="mt-4">
              <span className="font-bold text-sm">Entertainment</span>
              {entertainmentMenu.map((item, index) => (
                <p className="my-0.5 text-sm" key={index}>
                  {item}{" "}
                </p>
              ))}
            </div>
          </div>
          <div className="sm:mt-0 mt-4">
            <span className="font-bold text-sm">Apple Store</span>
            {storeMenu.map((item, index) => (
              <p className="my-0.5 text-sm" key={index}>
                {item}{" "}
              </p>
            ))}
          </div>
          <div className="-mt-14 sm:mt-0">
            <div>
              <span className="font-bold text-sm">For Business</span>
              <p className="my-0.5 text-sm">Apple and Business</p>
              <p className="text-sm">Shop for Business</p>
            </div>
            <div className="mt-4">
              <span className="font-bold text-sm">For Education</span>
              <p className="text-sm">Apple and Education</p>
              <p className="my-0.5 text-sm">Shop for K-12</p>
              <p className="text-sm">Shop for College</p>
            </div>
            <div className="mt-4">
              <span className="font-bold text-sm">For Healthcare</span>
              <p className="text-sm">Apple in Healthcare</p>
              <p className="my-0.5 text-sm">Health on Apple Watch</p>
              <p className="text-sm">Health Records on iPhone</p>
            </div>
            <div className="mt-4">
              <span className="font-bold text-sm">For Government</span>
              <p className="text-sm">Shop for Government</p>
              <p className="my-0.5 text-sm">Shop for Veterans and Military</p>
            </div>
          </div>
          <div>
            <span className="font-bold text-sm">Apple Values</span>
            {valuesMenu.map((item, index) => (
              <p className="my-0.5 text-sm" key={index}>
                {item}{" "}
              </p>
            ))}
            <span className="font-bold text-sm">About Apple</span>
            {aboutMenu.map((item, index) => (
              <p className="my-0.5 text-sm" key={index}>
                {item}{" "}
              </p>
            ))}
          </div>
        </div>
        <p className="my-4 text-sm">
          More ways to shop:{" "}
          <span className="text-blue-500 underline">Find an Apple Store</span>{" "}
          or <span className="text-blue-500 underline">other retailer</span>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
        <div className="py-4">
          <hr />
        </div>
        <div className="sm:flex justify-between">
          <p className="text-sm">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <p className="text-sm">
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
          </p>
          <p className="text-sm">United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
