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
            What intellectual property notices should I be aware of?
          </h1>
          <ul type="circle" className="w-full p-5 my-2">
            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">Copyright</span>: The Netflix
              service, including all content provided on the Netflix service, is
              protected by copyright, trade secret or other intellectual
              property laws and treaties.
            </li>
            <br />
            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">Trademarks</span>: Netflix is a
              registered trademark of Netflix, Inc.
            </li>
            <br />

            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">Patents</span>:Netflix has
              patents that apply to our service.
            </li>
            <br />

            <li className="text-white text-lg text-left font-mono text-md">
              - <span className="text-red-600">Featured</span>: People who live
              together in a single household can have their own personalized
              Netflix experience. You can have up to 5 profiles on a single
              Netflix account.
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
              - <span className="text-red-600">Logout</span>: Getting rid
              of a device you used to watch Netflix? Make sure to sign out of
              any accounts or services that you used on the device, including
              Netflix.
            </li>
            <br />
            <li className="text-white text-lg text-center font-mono text-md">
              For more visit{" "}
              <a
                href="https://www.netflix.com/in/"
                rel="noreferrer"
                target="_blank"
                className="text-red-600"
              >
                Netflix India
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default AlertComp;

