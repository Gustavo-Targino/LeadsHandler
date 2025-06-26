import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export function App() {
  return (
    <div className="w-full max-w-[1120px] mx-auto h-[50vh] flex items-center justify-center">
      <Tabs defaultValue="account" className="w-full items-center">
        <TabsList>
          <TabsTrigger value="account">Invited</TabsTrigger>
          <TabsTrigger value="password">Accepted</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Invited Leads</TabsContent>
        <TabsContent value="password">Accepted Leads</TabsContent>
      </Tabs>
    </div>
  );
}
