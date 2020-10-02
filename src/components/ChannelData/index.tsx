import React, { useRef, useEffect } from 'react';

import {
  Container, Messages, InputWrapper, Input, InputIcon,
} from './styles';
import Message, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const message = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = message.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [message]);

  return (
    <Container>
      <Messages ref={message}>
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />
        <Message author="Fabio" content="Today is a good day" date="02/10/2020" />

        <Message
          author="Raiw"
          isBot
          content={(
            <>

              <Mention>@Fabio Celeste</Mention>
              , eai guri

            </>
)}
          date="02/10/2020"
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Digite sua mensagem" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
