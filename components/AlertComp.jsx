import React from 'react';
import Link
    from 'next/link';
const AlertComp = () => {
    return (
      <div className="w-full h-full bg-black">
        <Link href="/home">
          <button className="py-1.5 text-white border-2 border-red-600 px-3">
            Go Back
          </button>
        </Link>
        <div className="min-h-full p-5 w-full ">
          <h1 className="text-5xl text-left font-mono text-white ">
            WHAT INTELLECTUAL PROPERTY NOTICE SHOULD I BE AWARE OF?
          </h1>
          <ul type="circle" className="w-full p-5 my-2">
            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">COPYRIGHT</span>: THE NETFLIX
              SERVICE, INCLUDING ALL CONTENT PROVIDED ON THE NETFLIX SERVICE, IS
              PROTECTED BY COPYRIGHT, TRADE SECRET OR OTHER INTELLECTUAL
              PROPERTY LAWS AND TREATIES.
            </li>
            <br />
            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">TRADEMARKS</span>: NETFLIX IS A
              REGISTERED TRADEMARK OF NETFLIX, INC.
            </li>
            <br />

            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">PATENTS</span>: NETFLIX HAS
              PATENTS THAT APPLY TO OUR SERVICE. FOR INFORMATION ON NETFLIX
              PATENTS SEARCH FOR NETFLIX PATENTS.
            </li>
            <br />

            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">PROMOTIONAL OFFERS</span>: WE MAY
              FROM TIME TO TIME OFFER SPECIAL PROMOTIONAL OFFERS, PLANS OR
              MEMBERSHIPS OFFERS. WE MAY USE INFORMATION SUCH AS DEVICE ID,
              METHOD OF PAYMENT OR AN ACCOUNT EMAIL ADDRESS USED WITH AN
              EXISTING OR RECENT NETFLIX MEMBERSHIP TO DETERMINE OFFER
              ELIGIBILITY.
            </li>
            <br />

            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">BILLING CYCLE</span>: THE
              MEMBERSHIP FEE FOR THE NETFLIX SERVICE AND ANY OTHER CHARGES YOU
              MAY INCUR IN CONNECTION WITH YOUR USE OF THE SERVICE, SUCH AS
              TAXES AND POSSIBLE TRANSACTION FEES,WILL BE CHARGED TO YOUR
              PAYMENT METHOD ON THE SPECIFIC PAYMENT DATE INDICAATED ON THE
              ACCOUNTS PAGE.
            </li>
            <br />
            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">CANCELLATION</span>: YOU CAN
              CANCEL YOUR NETFLIX MEMBERSHIP AT ANY TIME, AND YOU WILL CONTINUE
              TO HAVE ACCESS TO THE NETFLIX SERVICE THROUGH THE END OF YOUR
              BILLING PERIOD. TO THE EXTENT PERMITTED BY THE APPLICATION LAW,
              PAYMENTS ARE NON-REFUNDABLE AND WE DO NOT PROVIDE REFUNDS OR
              CREDITS FOR ANY PARTIAL MEMBERSHIP PERIODS OR UNUSED NETFLIX
              CONTENT.
            </li>
            <br />
            <li className="text-white text-lg text-center font-mono text-md">
              FOR MORE VISIT{" "}
              <a
                href="https://www.netflix.com/in/"
                rel="noreferrer"
                target="_blank"
                className="text-red-600"
              >
                NETFLIX INDIA
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default AlertComp;

