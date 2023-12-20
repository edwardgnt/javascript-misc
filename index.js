const reports = [
  {
    clientId: 1001,
    accountId: 1001,
    title: "-- Select a Report --",
    opts: { start: false, end: false, cc: false },
    roles: ["test"],
    component: "DefaultReport",
  },
  {
    clientId: 1432,
    accountId: 2342,
    title: "-TOOL LAUNCHER-",
    component: "ToolLauncher",
    opts: { start: false, end: false, cc: true },
    roles: ["supervisor", "admin"],
  },
  {
    clientId: 2,
    accountId: 2,
    title: "Abandoned Messages",
    component: "Abandons",
    opts: { start: true, end: true, cc: true },
    roles: ["supervisor", "admin"],
  },
  {
    clientId: 24352,
    accountId: 76689,
    title: "Agent Report",
    component: "AgentReport",
    opts: { start: true, end: true, cc: true },
    roles: ["supervisor", "admin"],
  },
  {
    clientId: 4,
    accountId: 4,
    title: "Agent Timeline",
    component: "AgentTimeline",
    opts: { start: true, end: true, cc: true },
    roles: ["supervisor", "admin"],
  },
];

const filteredReports = reports.filter((item) => {
  return item.clientId == item.accountId;
});

console.log(filteredReports);
