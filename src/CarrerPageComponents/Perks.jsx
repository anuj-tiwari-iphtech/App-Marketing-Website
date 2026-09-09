import { PiLeaf } from "react-icons/pi";
import { BsHeartPulse } from "react-icons/bs";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import './Perks.css';

const perksData = [
  {
    id: 1,
    title: 'Mental health & wellness benefits',
    desc: 'Velit officia enim dolore sit tempor qui sunt ut qui voluptate id eu sunt',
    variant: 'white',
    gridClass: 'perk-pos-1',
    icon: <PiLeaf />,
  },
  {
    id: 2,
    title: 'Heath, dental and vision insurance',
    desc: 'Velit officia enim dolore sit tempor qui sunt ut qui voluptate id eu sunt',
    variant: 'white',
    gridClass: 'perk-pos-2',
    icon: <BsHeartPulse />,
  },
  {
    id: 3,
    title: 'Learning & development',
    desc: 'Velit officia enim dolore sit tempor qui sunt ut qui voluptate id eu sunt',
    variant: 'transparent',
    gridClass: 'perk-pos-3',
    icon: <FaArrowTrendUp />,
  },
  {
    id: 4,
    title: 'Unlimited days off',
    desc: 'Velit officia enim dolore sit tempor qui sunt ut qui voluptate id eu sunt',
    variant: 'transparent',
    gridClass: 'perk-pos-4',
    icon: <PiAirplaneTakeoff />,
  },
];

export default function Perks() {
  return (
    <section className="perks-section">
      <div className="perks-container">
        <h2 className="perks-main-title">Perks</h2>

        <div className="perks-grid">
          {perksData.map((perk) => (
            <div
              key={perk.id}
              className={`perk-card perk-card-${perk.variant} ${perk.gridClass}`}
            >
              <div className="perk-icon-wrapper">{perk.icon}</div>
              <h3 className="perk-title">{perk.title}</h3>
              <p className="perk-desc">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}