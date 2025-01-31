import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const commands = [
  {
    command: "ls",
    description: "Lister les fichiers et dossiers",
    example: "ls -la",
  },
  {
    command: "cd",
    description: "Changer de répertoire",
    example: "cd Documents",
  },
  {
    command: "pwd",
    description: "Afficher le répertoire courant",
    example: "pwd",
  },
  {
    command: "mkdir",
    description: "Créer un nouveau dossier",
    example: "mkdir mon_dossier",
  },
  {
    command: "rm",
    description: "Supprimer des fichiers ou dossiers",
    example: "rm fichier.txt",
  },
  {
    command: "cp",
    description: "Copier des fichiers ou dossiers",
    example: "cp source.txt destination.txt",
  },
  {
    command: "mv",
    description: "Déplacer ou renommer des fichiers",
    example: "mv ancien.txt nouveau.txt",
  },
];

const BasicCommands = () => {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-terminal-green hover:text-terminal-green/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Link>

        <h1 className="text-3xl font-bold text-terminal-green mb-6">Commandes de Base</h1>
        
        <div className="grid gap-6">
          {commands.map((cmd) => (
            <Card key={cmd.command} className="border-terminal-green/20 bg-terminal-bg/30">
              <CardHeader>
                <CardTitle className="text-terminal-yellow font-mono">{cmd.command}</CardTitle>
                <CardDescription className="text-terminal-text/80">
                  {cmd.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <code className="bg-black/30 p-2 rounded font-mono text-terminal-purple block">
                  $ {cmd.example}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicCommands;