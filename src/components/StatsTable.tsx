interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Annual Revenue", value: "6.0m" },
  { label: "Global users", value: "4.3m" },
  { label: "Team members", value: "5" },
];

const StatsTable = () => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide">Stats</h3>
      <div className="border-t border-border">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-border"
          >
            <span className="text-sm font-mono text-foreground">{stat.label}</span>
            <span className="text-2xl font-semibold text-foreground tracking-tight">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsTable;
