import Button from "@/shared/components/button/Button";

function DiscountCodes() {
  return (
    <div className="bg-muted">
      <div className="container flex justify-between maxLg:flex-col">
        <div className="py-[1.875rem]">
          <h2 className="font-semibold text-lg leading-3.5 text-foreground mb-[1.125rem]">
            Discount Codes
          </h2>
          <p className="text-base leading-1.5 text-frost-grey mb-10">
            Enter your coupon code if you have one
          </p>
          <div className="border border-muted-foreground rounded-xl w-fit overflow-hidden bg-white mb-10 flex">
            <input className="bg-white px-2 py-3 font-medium text-base leading-1.5 rounded-l-xl" />
            <button className="bg-primary text-white font-medium text-base leading-1.5 py-3 pr-[1.3125rem] pl-[1.9375rem] rounded-r-xl hover:opacity-90">
              Apply Coupon
            </button>
          </div>
          <button className="border border-muted-foreground text-primary font-medium text-base leading-1.5 py-3 px-[2.6563rem] rounded-lg hover:text-white hover:bg-primary">
            Continue Shopping
          </button>
        </div>
        <div className="bg-accent-foreground shadow-md">
          <div className="py-[2.8125rem] lg:px-[7.3125rem] px-12 text-center">
            <p className="text-maxXl leading-4.5 tracking-sm mb-[0.875rem]">
              Sub Total <span className="ml-[6.25rem]">Rs.3050</span>
            </p>
            <p className="text-maxXl leading-4.5 tracking-sm pb-5 border-b border-dashed border-primary">
              Sub Total <span className="ml-[6.25rem]">Rs.3050</span>
            </p>
            <p className="text-maxXl leading-4.5 tracking-sm pt-5 ">
              Grand Total <span className="ml-[6.25rem]">Rs.3050</span>
            </p>
          </div>
          <div className="flex items-center flex-col">
            <hr className="border border-rainmaker w-full" />
            <Button value="primary" className="my-12 w-fit">
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountCodes;
