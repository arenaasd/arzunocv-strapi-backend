import type { Schema, Struct } from '@strapi/strapi';

export interface CertificatesCertificates extends Struct.ComponentSchema {
  collectionName: 'components_certificates_certificates';
  info: {
    displayName: 'certificates';
    icon: 'briefcase';
  };
  attributes: {
    date: Schema.Attribute.String;
    issuer: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'Education';
    icon: 'stack';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityOrCollegeName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'Experience';
    icon: 'file';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HobbiesHobbies extends Struct.ComponentSchema {
  collectionName: 'components_hobbies_hobbies';
  info: {
    displayName: 'hobbies';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LanguagesLanguages extends Struct.ComponentSchema {
  collectionName: 'components_languages_languages';
  info: {
    displayName: 'languages';
    icon: 'alien';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<
      ['Basic', 'Intermediate', 'Fluent', 'Native']
    >;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'projects';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    techs: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certificates.certificates': CertificatesCertificates;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'hobbies.hobbies': HobbiesHobbies;
      'languages.languages': LanguagesLanguages;
      'projects.projects': ProjectsProjects;
      'skills.skills': SkillsSkills;
    }
  }
}
