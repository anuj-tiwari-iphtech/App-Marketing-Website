import React from 'react';
import { LuChartPie, LuTrendingUp, LuDatabase, LuServer } from 'react-icons/lu';
import './Benefits.css';

export default function BenefitsSection() {
  const benefitsData = [
    {
      id: 1,
      icon: <LuChartPie />,
      title: "Magna non incididunt",
      description: "Occaecat culpa non culpa est eu sint deserunt elit esse dolor ea dolore ea. Sint proident ipsum"
    },
    {
      id: 2,
      icon: <LuTrendingUp />,
      title: "Est cupidatat dolo",
      description: "Minim proident cillum aliquip voluptate veniam minim amet nisi sint adipisicing. Eiusmod nulla"
    },
    {
      id: 3,
      icon: <LuDatabase />,
      title: "Culpa eiusmod velit",
      description: "Tempor consequat fugiat mollit sint enim consequat mollit ut dolor et culpa laborum enim"
    },
    {
      id: 4,
      icon: <LuServer />,
      title: "Enim nisi dolor qui",
      description: "Lorem cillum et culpa ut quis est non sunt commodo culpa sint reprehenderit. Nulla veniam velit"
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        
        <div className="benefits-header-col">
          <h2 className="benefits-main-heading">
            Feature <br />
            benefits
          </h2>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((item) => (
            <div key={item.id} className="benefits-item">
              <div className="benefits-icon-box">
                {item.icon}
              </div>
              <div className="benefits-item-content">
                <h3 className="benefits-item-title">{item.title}</h3>
                <p className="benefits-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}