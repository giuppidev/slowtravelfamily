export default function Map() {
  return (
    <div className="bg-white py-16 lg:py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative gap-y-6 py-24 px-8 bg-primaryGreen rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
            <img
              src="https://c.pxhere.com/images/89/1a/4898ca5cd276d6fafc07f7abd76a-1444769.jpg!d"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2  lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Teaser/e-commerce-usa-t.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-1">
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              alt=""
            />
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">
                Workflow has completely transformed how we interact with
                customers. We've seen record bookings, higher customer
                satisfaction, and reduced churn.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Marie Chilvers</span>
                  <span>CEO, Workcation</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
