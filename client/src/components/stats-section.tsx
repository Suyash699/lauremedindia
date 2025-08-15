import { companyStats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-organic-green to-pharma-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
          <div data-testid="stat-customers">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.customers}</div>
            <div className="text-sm opacity-90">Satisfied Customers</div>
          </div>
          <div data-testid="stat-companies">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.companies}</div>
            <div className="text-sm opacity-90">Companies Associated</div>
          </div>
          <div data-testid="stat-products">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.products}</div>
            <div className="text-sm opacity-90">Organic Products</div>
          </div>
          <div data-testid="stat-retailers">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.retailers}</div>
            <div className="text-sm opacity-90">Retailing Counters</div>
          </div>
          <div data-testid="stat-space">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.space}</div>
            <div className="text-sm opacity-90">SQFT Stock Space</div>
          </div>
          <div data-testid="stat-employees">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.employees}</div>
            <div className="text-sm opacity-90">Employees</div>
          </div>
          <div data-testid="stat-industries">
            <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.industries}</div>
            <div className="text-sm opacity-90">Industries Presence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
