import React from 'react';

import Concluded from '../../components/Concluded';

const RegistrationCompleted = () => {
  return (
    <>
      <Concluded
        title="Cadastro concluído"
        description="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência."
        titleButton="Fazer login"
        link="/"
      />
    </>
  );
};

export default RegistrationCompleted;
