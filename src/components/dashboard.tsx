import { site } from "@/config/site";

export function Dashboard() {
  const p = site.preview;
  return (
    <div className="dashboard-window">
      <div className="browser-bar">
        <div className="traffic-lights">
          <i />
          <i />
          <i />
        </div>
        <div className="address">
          <span aria-hidden="true">♧</span>
          {p.browser}
        </div>
        <span className="browser-plus" aria-hidden="true">
          +
        </span>
      </div>
      <div className="dashboard">
        <aside className="dash-sidebar">
          <div className="workspace">
            <span className="workspace-icon">{p.workspaceInitial}</span>
            <strong>{p.workspace}</strong>
            <span>⌄</span>
          </div>
          <div className="workspace-label">{p.workspaceTag}</div>
          <div className="dash-navigation">
            {p.navigation.map((item, index) => (
              <div className={index === 0 ? "active" : ""} key={item}>
                <span aria-hidden="true">
                  {["▦", "◷", "♧", "↗", "⚙"][index]}
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className="sidebar-bottom">
            <span className="small-avatar">{p.userInitials}</span>
            <div>
              <strong>{p.activities[0].name}</strong>
              <span>{p.workspace}</span>
            </div>
            <span aria-hidden="true">⌄</span>
          </div>
        </aside>
        <div className="dash-main">
          <div className="dash-topline">
            <span>{p.navigation[0]}</span>
            <span aria-hidden="true">
              ⌕<span className="notification-dot" /> ♧{" "}
              <span className="tiny-avatar">{p.userInitials}</span>
            </span>
          </div>
          <div className="dash-content">
            <div className="dash-heading">
              <div>
                <h3>{p.greeting}</h3>
                <p>{p.subtitle}</p>
              </div>
              <span className="date-filter">
                {p.period} <span aria-hidden="true">⌄</span>
              </span>
            </div>
            <div className="metrics">
              {p.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <div>
                    {metric.label}
                    <span aria-hidden="true">↗</span>
                  </div>
                  <strong>{metric.value}</strong>
                  <span className="growth">↗ {metric.change}</span>
                </div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-heading">
                <div>
                  <h4>{p.chart}</h4>
                  <p>{p.chartNote}</p>
                </div>
                <span className="chart-legend">
                  <i />
                  {p.metrics[0].label}
                </span>
              </div>
              <div className="chart-plot">
                <div className="chart-guides">
                  {p.chartLabels.map(label => <span key={label}>{label}</span>)}
                </div>
                <svg
                  viewBox="0 0 700 170"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label={p.chart}
                >
                  <defs>
                    <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity=".22"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 145 C35 145 30 120 70 125S120 148 160 115S200 120 240 95S280 130 320 90S360 95 400 70S440 90 480 50S540 70 580 40S640 48 700 8V170H0Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0 145 C35 145 30 120 70 125S120 148 160 115S200 120 240 95S280 130 320 90S360 95 400 70S440 90 480 50S540 70 580 40S640 48 700 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                  />
                </svg>
              </div>
              <div className="chart-months">
                {p.months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
            <div className="activity">
              <h4>{p.activity}</h4>
              {p.activities.map((person) => (
                <div className="activity-row" key={person.name}>
                  <span className="small-avatar">{person.initials}</span>
                  <strong>{person.name}</strong>
                  <span className="activity-action">{person.action}</span>
                  <span className="activity-time">{person.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
