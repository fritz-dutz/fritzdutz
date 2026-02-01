interface Stat {
  label: string;
  value: string;
}
const stats: Stat[] = [{
  label: "Annual Revenue",
  value: "6.0m"
}, {
  label: "Global users",
  value: "4.3m"
}, {
  label: "Team members",
  value: "5"
}];
const StatsTable = () => {
  return <div className="w-full">
      
      <div className="border-t border-border">
        {stats.map((stat, index) => {})}
      </div>
    </div>;
};
export default StatsTable;