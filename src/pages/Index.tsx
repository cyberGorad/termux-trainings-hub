import { Terminal, Package, Tool, Command } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-terminal-green mb-4">Formation Termux</h1>
          <p className="text-xl text-terminal-text/80">
            Apprenez à utiliser Termux comme un pro
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard
            title="Commandes de Base"
            description="Les commandes essentielles pour débuter avec Termux"
            icon={<Command className="w-6 h-6 text-terminal-purple" />}
            to="/basic-commands"
          />
          <CategoryCard
            title="Installation"
            description="Comment installer et configurer Termux correctement"
            icon={<Terminal className="w-6 h-6 text-terminal-yellow" />}
            to="/installation"
          />
          <CategoryCard
            title="Packages"
            description="Gérer les packages et les dépendances"
            icon={<Package className="w-6 h-6 text-terminal-green" />}
            to="/packages"
          />
          <CategoryCard
            title="Outils"
            description="Les outils essentiels pour le pentesting et le développement"
            icon={<Tool className="w-6 h-6 text-terminal-purple" />}
            to="/tools"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;