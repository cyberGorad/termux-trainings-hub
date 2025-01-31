import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

export const CategoryCard = ({ title, description, icon, to }: CategoryCardProps) => {
  return (
    <Link to={to}>
      <Card className="hover:bg-terminal-bg/10 transition-colors cursor-pointer border-terminal-green/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            {icon}
            <CardTitle className="text-terminal-green">{title}</CardTitle>
          </div>
          <CardDescription className="text-terminal-text/80">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};