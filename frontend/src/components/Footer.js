const Footer = () => {
  return (
    <footer className="px-12 py-16 font-inter text-white bg-blue-dark">
      <div className='container mx-auto'>
        <div className="flex justify-between">
          <img className="h-12" src="/images/logos-03.svg" alt="footerLogo" />
          <div className="text-center">
            <h1 className='text-3xl pb-3 font-semibold'>Sell your art online</h1>
            <p className='font-semibold'>Connect with us on social media</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="footer_bottom__inner">
            <span className='font-semibold'>Shop</span>

            <div className="text-sm">
              <p className='pt-2'>Sell on PRINTEEBO</p>
              <p className='pt-2'>Product Catalog</p>
              <p className='pt-2'>Design your product</p>
              <p className='pt-2'>Request Custom Design</p>
              <p className='pt-2'>Make Bulk Order</p>
              <p className='pt-2'>Brands</p>
              <p className='pt-2'>Login</p>
            </div>
          </div>

          <div className="footer_bottom__inner">
            <span className='font-semibold'>Help</span>
            <div className="text-sm">
              <p className='pt-2'>Track Delivery</p>
              <p className='pt-2'>Return Policy</p>
              <p className='pt-2'>FAQs</p>
              <p className='pt-2'>Contact Us</p>
              <p className='pt-2'>Pricing Calculator</p>
            </div>
          </div>

          <div className="footer_bottom__inner">
            <span className='font-semibold'>About Us</span>
            <div className="text-sm">
              <p className='pt-2'>About Us</p>
              <p className='pt-2'>Partners</p>
              <p className='pt-2'>Blog</p>
            </div>
          </div>

          <div className="flex">
            <div className='flex justify-center mr-10 mt-4'>
              <div className="mx-2">
                <svg
                  className="h-8"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm3.72,6.66H14.21C13,6.66,12.8,7.22,12.8,8V9.86h2.82l-.37,2.84H12.8V20H9.86V12.7H7.41V9.86H9.86V7.76A3.43,3.43,0,0,1,13.52,4a21.84,21.84,0,0,1,2.2.11Z" fill='#58c0d0' />
                </svg>
              </div>
              <div className="mx-1">
                <svg
                  className="h-8"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.88,9.41v.37a8.31,8.31,0,0,1-8.36,8.36A8.39,8.39,0,0,1,5,16.83c.22,0,.47,0,.69,0a5.94,5.94,0,0,0,3.66-1.26,2.92,2.92,0,0,1-2.74-2,2.6,2.6,0,0,0,.56.06,2.43,2.43,0,0,0,.77-.12,2.91,2.91,0,0,1-2.36-2.87v0A2.93,2.93,0,0,0,6.91,11,2.92,2.92,0,0,1,5.6,8.53,3.09,3.09,0,0,1,6,7a8.35,8.35,0,0,0,6.06,3.08A2.53,2.53,0,0,1,12,9.44a2.95,2.95,0,0,1,5.09-2,6.13,6.13,0,0,0,1.87-.71,3,3,0,0,1-1.29,1.63,5.81,5.81,0,0,0,1.68-.47A5.41,5.41,0,0,1,17.88,9.41Z" fill='#58c0d0' />
                </svg>
              </div>
              <div className="mx-2">
                <svg
                  className="h-8"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,9.5A2.5,2.5,0,1,0,14.5,12,2.5,2.5,0,0,0,12,9.5Z" />
                  <path d="M17.85,7.58a2.44,2.44,0,0,0-1.43-1.43A4.35,4.35,0,0,0,15,5.89c-.79,0-1,0-3,0s-2.24,0-3,0a4.35,4.35,0,0,0-1.39.26A2.44,2.44,0,0,0,6.15,7.58,4.15,4.15,0,0,0,5.9,9c0,.79-.05,1-.05,3s0,2.24.05,3a4.15,4.15,0,0,0,.25,1.39,2.44,2.44,0,0,0,1.43,1.43A4.15,4.15,0,0,0,9,18.1c.79,0,1,0,3,0s2.24,0,3,0a4.15,4.15,0,0,0,1.39-.25,2.44,2.44,0,0,0,1.43-1.43A4.35,4.35,0,0,0,18.11,15c0-.79,0-1,0-3s0-2.24,0-3A4.35,4.35,0,0,0,17.85,7.58ZM12,15.85A3.85,3.85,0,1,1,15.85,12,3.85,3.85,0,0,1,12,15.85Zm4.89-7.68a.87.87,0,0,1-.25.46,1,1,0,0,1-.46.25.92.92,0,0,1-.52-.05.87.87,0,0,1-.4-.33A.93.93,0,0,1,15.1,8a.91.91,0,0,1,.27-.64A.89.89,0,0,1,16,7.1h0a.87.87,0,0,1,.5.15.94.94,0,0,1,.34.4A1,1,0,0,1,16.89,8.17Z" fill='#58c0d0' />
                  <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm7.46,15.09a5.69,5.69,0,0,1-.35,1.82,3.88,3.88,0,0,1-2.2,2.2,5.45,5.45,0,0,1-1.82.34c-.8,0-1.05.05-3.09.05s-2.29,0-3.09-.05a5.51,5.51,0,0,1-1.82-.34,3.88,3.88,0,0,1-2.2-2.2,5.45,5.45,0,0,1-.34-1.82c0-.8,0-1.05,0-3.09s0-2.29,0-3.09a5.45,5.45,0,0,1,.34-1.82,3.88,3.88,0,0,1,2.2-2.2,5.45,5.45,0,0,1,1.82-.34c.8,0,1.05,0,3.09,0s2.29,0,3.09,0a5.45,5.45,0,0,1,1.82.34,3.88,3.88,0,0,1,2.2,2.2,5.69,5.69,0,0,1,.35,1.82c0,.8,0,1.05,0,3.09S19.49,14.29,19.46,15.09Z" fill='#58c0d0' />
                </svg>
              </div>
              <div className="ml-1">
                <svg
                  className="h-8"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.43,6.64a5.73,5.73,0,0,0-1.85,7.91l.15.23-.57,2.16,2.19-.57.23.11a5.63,5.63,0,0,0,5.9-.07A5.75,5.75,0,1,0,9.43,6.64Zm6.51,6.78a2.74,2.74,0,0,1-.15.53,1.24,1.24,0,0,1-.19.22c-.08.08-.15.12-.23.19l-.08.08c-.07.07-.15.07-.26.15a1.34,1.34,0,0,1-.57.15h-.38c-.11,0-.26,0-.37-.07A6.85,6.85,0,0,1,11,13.23a2.16,2.16,0,0,0-.3-.31l-.15-.15a6.12,6.12,0,0,1-1.4-1.93l0-.11a2.3,2.3,0,0,1-.19-.87,1.88,1.88,0,0,1,.42-1.17c.07-.08.11-.15.19-.23l.22-.15,0,0c.08,0,.15,0,.23,0h.41a.47.47,0,0,1,.27.19,13.87,13.87,0,0,1,.6,1.44.49.49,0,0,1-.07.38c-.08.07-.12.19-.19.26l-.27.31s0,.11,0,.18,0,.12.07.16l0,.07a4,4,0,0,0,.72.91c.07.08.19.15.26.23a3.81,3.81,0,0,0,1.1.72l.19.07a.28.28,0,0,0,.15.08h0a.22.22,0,0,0,.19-.12l.57-.64a.5.5,0,0,1,.26-.08s.08,0,.11,0c.38.19,1,.46,1,.46l.41.19a.36.36,0,0,1,.12.07Z" />
                  <path fill='#58c0d0' d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm.46,18.45a6.88,6.88,0,0,1-3.3-.83l-3.67.94,1-3.59a7.28,7.28,0,0,1-.91-3.45,6.91,6.91,0,0,1,6.92-7,6.91,6.91,0,0,1,6.89,6.93A7,7,0,0,1,12.46,18.45Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
