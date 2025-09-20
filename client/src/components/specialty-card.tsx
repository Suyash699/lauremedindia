import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { type Specialty } from "@shared/schema";

interface SpecialtyCardProps {
  specialty: Specialty;
}

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <Link href={`/products?specialty=${encodeURIComponent(specialty.name)}`}>
      <Card className="group cursor-pointer hover:shadow-md transition-shadow h-full" data-testid={`card-specialty-${specialty.id}`}>
        <CardContent className="p-0">
          <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
            {specialty.imageUrl ? (
              <img 
                src={specialty.imageUrl} 
                alt={specialty.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-specialty-${specialty.id}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-organic-green/20 to-pharma-blue/20">
                <span className="text-2xl sm:text-3xl">🏥</span>
              </div>
            )}
          </div>
          <div className="p-2 sm:p-3">
            <h3 className="text-center font-semibold text-gray-700 group-hover:text-organic-green transition-colors text-xs sm:text-sm leading-tight" data-testid={`text-specialty-name-${specialty.id}`}>
              {specialty.name}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
