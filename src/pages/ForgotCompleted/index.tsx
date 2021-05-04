import React from 'react';

import Concluded from '../../components/Concluded';

const ForgotCompleted = () => {
  return (
    <>
      <Concluded
        title="Redefinição enviada!"
        description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
        titleButton="Voltar ao login"
        link="/"
      />
    </>
  );
};

export default ForgotCompleted;
