import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { tokens, fonts } from "../tokens";
import "react-toastify/dist/ReactToastify.css";

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
  margin-bottom: 10px;
  outline: none;
  transition: border-color 0.15s ease;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: #915EFF;
  }
`;

const Input = styled.input`
  ${inputBase}
`;

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
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover:not(:disabled) {
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

const CVDownload = styled.p`
  font-family: ${fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 14px;
  text-align: center;
`;

const CVDownloadLink = styled.a`
  color: ${tokens.purple};
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const DirectRow = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const DirectLabel = styled.p`
  font-family: ${fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
`;

const DirectButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const DirectBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.6);
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
  background: rgba(255, 255, 255, 0.03);

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export default function Contact() {
  const [state, handleSubmit] = useForm("mnjyapja");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message received! We'll be in touch within 24 hours.", {
        position: "top-center",
        autoClose: 5000,
        style: { fontFamily: "Inter, sans-serif", fontSize: "13px" },
      });
    }
  }, [state.succeeded]);

  const buttonLabel = state.submitting ? "Sending..." : "Send message →";

  return (
    <Section id="contact">
      <ToastContainer theme="dark" />
      <Inner>
        <Headline>
          Ready to build
          <br />
          <em>something?</em>
        </Headline>
        <Sub>
          Whether you're hiring, building something and need a developer who gets the bigger
          picture, or just want to connect — send a message. I respond within 24 hours.
        </Sub>

        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Your name"
            required
            disabled={state.submitting}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <Input
            name="business"
            placeholder="Business name"
            disabled={state.submitting}
          />
          <Select
            name="interest"
            required
            defaultValue=""
            disabled={state.submitting}
          >
            <option value="" disabled>
              What are you interested in?
            </option>
            <option value="hire">I want to hire you full-time</option>
            <option value="contract">
              I need a developer for a project or contract
            </option>
            <option value="collaborate">
              I want to collaborate or build something together
            </option>
            <option value="connect">I just want to connect</option>
          </Select>
          <Input
            name="socials"
            placeholder="Instagram handle (if you have one)"
            disabled={state.submitting}
          />
          <Textarea
            name="message"
            rows={3}
            placeholder="You can tell us what you need or other notes about your business..."
            disabled={state.submitting}
          />
          <SubmitBtn type="submit" disabled={state.submitting}>
            {buttonLabel}
          </SubmitBtn>
        </Form>

        <Reassurance>
          No recruiters pitching roles I didn't ask for. Just real conversations about real work.
        </Reassurance>

        <CVDownload>
          Prefer a CV?{' '}
          <CVDownloadLink href="/Owen_Fullstack_Dev_CV.pdf" target="_blank" rel="noopener noreferrer">
            Download it here →
          </CVDownloadLink>
        </CVDownload>

        <DirectRow>
          <DirectLabel>Prefer to reach out directly?</DirectLabel>
          <DirectButtons>
            <DirectBtn
              href="https://wa.me/2348113623694?text=Hi%20Owen%2C%20I%27m%20interested%20in%20working%20together"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </DirectBtn>
            <DirectBtn
              href="https://ig.me/m/owen.create"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram DM
            </DirectBtn>
          </DirectButtons>
        </DirectRow>
      </Inner>
    </Section>
  );
}
