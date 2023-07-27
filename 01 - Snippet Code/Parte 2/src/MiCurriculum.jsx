import React from 'react';

const MiCurriculum = () => {
  const nombre = 'Juan Pérez';
  const tituloProfesional = 'Ingeniero de Software';
  const resumen = 'Soy un apasionado desarrollador de software con experiencia en proyectos web y móviles.';
  const educacion = [
    {
      titulo: 'Ingeniería en Sistemas',
      institucion: 'Universidad Ficticia',
      periodo: '2010 - 2014',
    },
    {
      titulo: 'Maestría en Desarrollo de Software',
      institucion: 'Universidad Imaginaria',
      periodo: '2015 - 2017',
    },
  ];
  const experienciaLaboral = [
    {
      puesto: 'Desarrollador Full-stack',
      empresa: 'Empresa Web',
      periodo: '2017 - Actualidad',
      descripcion: 'Trabajé en el desarrollo de aplicaciones web usando tecnologías como React, Node.js, y MongoDB.',
    },
    {
      puesto: 'Desarrollador Móvil',
      empresa: 'Empresa Móvil',
      periodo: '2015 - 2017',
      descripcion: 'Participé en el desarrollo de aplicaciones móviles nativas para iOS y Android.',
    },
  ];
  const githubUrl = 'https://github.com/tu_usuario_github';
  const linkedinUrl = 'https://www.linkedin.com/in/tu_perfil_linkedin/';

  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{tituloProfesional}</h2>
      <p>{resumen}</p>

      <h3>Educación</h3>
      <ul>
        {educacion.map((edu, index) => (
          <li key={index}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>

      <h3>Experiencia Laboral</h3>
      <ul>
        {experienciaLaboral.map((exp, index) => (
          <li key={index}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>

      <p>
        Visita mi perfil de GitHub: <a href={githubUrl}>{githubUrl}</a>
      </p>
      <p>
        Visita mi perfil de LinkedIn: <a href={linkedinUrl}>{linkedinUrl}</a>
      </p>
    </div>
  );
};

export default MiCurriculum;
