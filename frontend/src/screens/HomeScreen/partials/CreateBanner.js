const CreateBanner = () => {
  return (
    <div className="banner">
      <div className="banner_list">
        <img src="/images/time_Saving.jpg" alt="banner" />
        <h1>Time Saving</h1>
        <p>
          We handle receiving of orders, production and delivery without your
          involvement so you can focus building your brand and connecting with
          your customers.
        </p>
      </div>
      <div className="banner_list_middle">
        <img src="/images/ready_to_sell.jpg" alt="banner" />
        <div className="banner_list_middle__inner">
          <h3>Ready to Sale Your Art?</h3>
          <button>
            Sign Up
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 18.5L24 12L17.5 5.5L16.793 6.207L22.086 11.5L0 11.5V12.5L22.086 12.5L16.793 17.793L17.5 18.5Z"
                fill="#2E3A59"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="banner_list">
        <img src="/images/no_inventory.jpg" alt="banner" />
        <h1>No Inventory</h1>
        <p>
          Orders are printed on demand. So no need to stock up inventory. Also
          no upfront costs are required, so you can easily turn a profit
        </p>
      </div>
    </div>
  );
};

export default CreateBanner;
