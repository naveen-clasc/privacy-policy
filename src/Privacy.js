import React from "react";

const Privacy = () => {
  return (
    <div style={{ margin: 25 }}>
      <h1>CLASC Privacy Policy</h1>
      <p>
        Our privacy policy explains on the data we capture from you and
        application of the data we collect and disclosure of the date in certain
        cases, if applicable on the usage of our platform.
      </p>
      <ul className="he">
        <li>
          Information you provide is as follows:
          <br></br>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Gender</li>
            <li>Date of birth</li>
            <li>OTPs</li>
            <li>Ratings</li>
          </ul>
        </li>
        <li>
          Following information, we collect automatically:
          <br></br>
          <ul>
            <li>
              Your mobile devices, Web, Smart TVs, set top boxes or any other
              streaming devices (e.g. Amazon firestick) Ids or any other unique
              identifiers
            </li>
            <li>
              Your network and device software specifications like Wifi, mobile
              network, OS, IP address.
            </li>
            <li>
              The content that you browse, search and watch on our platform.
              This includes your search queries.
            </li>
            <li>
              Mobile, Web and Smart TV application stats like screen views,
              clicks on call to action buttons (e.g. submit or Finish buttons)
            </li>
          </ul>
        </li>
        <li>
          Following information, we receive from other sources:
          <br></br>
          <ul>
            <li>
              Security providers data that we use to protect our platform from
              fraud
            </li>
            <li>
              Information regarding the payment of a ticket from our payment
              gateway partner
            </li>
          </ul>
        </li>
        <li>
          We use the data collected in following ways:
          <ul>
            <li>
              To potentially analyze and investigate the fraudulent actions on
              our platforms and protect your and us from such actions
            </li>
            <li>
              To analyze and understand your location to get you personalized
              content through training and enhancing our algorithms
            </li>
            <li>Secure our platform</li>
          </ul>
        </li>
        <li>
          Currently, we do not disclose your data anywhere. However, we are
          obliged to provide your data to our partners or government of India as
          per the rules and regulations laid down by Indian Government.
        </li>
        <li>
          You can contact us using
          <a href="customercare@clasc.in">customercare@clasc.in</a> to know more
          on our privacy policy.
        </li>
      </ul>
      <br></br>
      <p>Updated on Dec-22, 2022</p>
    </div>
  );
};

export default Privacy;
