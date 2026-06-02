import { useState } from 'react';
import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

const Section = styled.section`
  background: ${tokens.dark};
  padding: 96px 32px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

const Inner = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
`;

const Headline = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 400;
  color: white;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 20px;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 36px;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 24px;
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  text-align: left;
`;

const inputBase = `
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.06);
  border: 0.5px solid rgba(255, 255, 255, 0.10);
  border-radius: 8px;
  padding: 12px 14px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  margin-bottom: 10px;
  outline: none;
  transition: border-color 0.15s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: #915EFF;
  }
`;

const Input = styled.input`${inputBase}`;

const Select = styled.select`
  ${inputBase}
  appearance: none;
  cursor: pointer;

  option {
    background: #1a1a1a;
    color: white;
  }
`;

const Textarea = styled.textarea`
  ${inputBase}
  resize: none;
  min-height: 80px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  font-family: ${fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: white;
  background: ${tokens.purple};
  border-radius: 100px;
  padding: 14px;
  margin-top: 6px;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: scale(1.01);
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Reassurance = styled.p`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  margin-top: 16px;
  text-align: center;
`;

const SuccessMsg = styled.div`
  font-family: ${fonts.body};
  font-size: 13px;
  color: ${tokens.purple};
  text-align: center;
  padding: 16px 0 8px;
`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', business: '', interest: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', form);
    setSubmitted(true);
  };

  return (
    <Section id="contact">
      <Inner>
        <Headline>
          Ready to build<br />
          <em>something?</em>
        </Headline>
        <Sub>
          No long proposals. No complicated processes. Just a message, a conversation, and then we
          get to work. We respond within 24 hours.
        </Sub>

        <Form onSubmit={handleSubmit}>
          {submitted ? (
            <SuccessMsg>
              Message received. We'll be in touch within 24 hours.
            </SuccessMsg>
          ) : (
            <>
              <Input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="business"
                placeholder="Business name"
                value={form.business}
                onChange={handleChange}
              />
              <Select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
              >
                <option value="" disabled>What are you interested in?</option>
                <option value="one-time">A one-time build (website, brand, or Reel)</option>
                <option value="retainer">The 1Ephraim retainer ($1,200/month)</option>
                <option value="custom">A custom project (PuissantDev)</option>
                <option value="unsure">I'm not sure yet — I just want to talk</option>
              </Select>
              <Textarea
                name="message"
                rows={3}
                placeholder="Tell us what you need..."
                value={form.message}
                onChange={handleChange}
              />
              <SubmitBtn type="submit">Send message →</SubmitBtn>
            </>
          )}
        </Form>

        <Reassurance>No spam. No pitch decks. Just a real conversation about your business.</Reassurance>
      </Inner>
    </Section>
  );
}
