const SellYourArtBanner = () => {
  return (
    <div className="sale_banner">
      <div className="sale_banner__left">
        <h1>Sell your art online</h1>
        <p>
          It’s very easy. Simply upload your artwork onto our easy to use
          Customize Tool and make your own T-shirt or other personalized
          printables to spread your unique message. You can choose from a
          variety of custom products like tshirts, jumpers, tote bags, throw
          pillows, mugs and many others. Let us take care of your idea and help
          you earn without hasssle as you sell your printables to the masses.
        </p>
        <button>
          Start Selling
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.46501 20.485L16.95 12L8.46501 3.515L7.05001 4.929L14.122 12L7.05001 19.071L8.46501 20.485Z"
              fill="#2E3A59"
            />
          </svg>
        </button>
      </div>
      <div className="sale_banner__right">
        <div className="banner_list">
          <img src="/images/steps-01.png" alt="banner" />
          <p>You a create an awesome design and upload it</p>
        </div>

        <div className="banner_list">
          <img src="/images/steps-02.png" alt="banner" />
          <p>Share the links to your online shop with your community</p>
        </div>

        <div className="banner_list">
          <img src="/images/steps-03.png" alt="banner" />
          <p>Orders are made and we produce and deliver them responsibly </p>
        </div>

        <div className="banner_list">
          <img src="/images/steps-04.png" alt="banner" />
          <p>
            You earn from your art and the world is blessed with an awesome
            printable of your creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellYourArtBanner;
