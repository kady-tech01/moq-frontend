// src/components/ClubEditPanel.jsx
import React, { useState, useEffect } from "react";

// Default config values
const defaultConfig = {
  club_name: "My Awesome Club",
  hero_title: "Welcome to Our Club",
  hero_subtitle: "We do amazing things",
  developer_name: "Developer Name",
  developer_contact: "developer@example.com"
};

// Map config values to edit panel fields
function mapToEditPanelValues(config) {
  return new Map([
    ["club_name", config.club_name || defaultConfig.club_name],
    ["hero_title", config.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["developer_name", config.developer_name || defaultConfig.developer_name],
    ["developer_contact", config.developer_contact || defaultConfig.developer_contact]
  ]);
}

const ClubEditPanel = ({ config }) => {
  const [fields, setFields] = useState({
    club_name: "",
    hero_title: "",
    hero_subtitle: "",
    developer_name: "",
    developer_contact: ""
  });

  // Populate fields from config on mount
  useEffect(() => {
    const mapped = mapToEditPanelValues(config);
    const initialFields = Object.fromEntries(mapped);
    setFields(initialFields);
  }, [config]);

  // Handle input changes
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated config:", fields);
    // You can send this to your backend or save it somewhere
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Club Name:</label>
        <input
          name="club_name"
          value={fields.club_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hero Title:</label>
        <input
          name="hero_title"
          value={fields.hero_title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hero Subtitle:</label>
        <input
          name="hero_subtitle"
          value={fields.hero_subtitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Developer Name:</label>
        <input
          name="developer_name"
          value={fields.developer_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Developer Contact:</label>
        <input
          name="developer_contact"
          value={fields.developer_contact}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ClubEditPanel;
