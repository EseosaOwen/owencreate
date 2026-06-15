import styled from "@emotion/styled";
import { tokens, fonts } from "../../tokens";
import { SectionDark, PurpleTextLink } from "../../styles/shared";

export const Section = SectionDark;

export const Inner = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
`;

export const Headline = styled.h2`
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

export const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 36px;
`;

export const Form = styled.form`
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

export const Input = styled.input`
  ${inputBase}
`;

export const Select = styled.select`
  ${inputBase}
  appearance: none;
  cursor: pointer;

  option {
    background: #1a1a1a;
    color: white;
  }
`;

export const Textarea = styled.textarea`
  ${inputBase}
  resize: none;
  min-height: 80px;
`;

export const SubmitBtn = styled.button`
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

export const Reassurance = styled.p`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  margin-top: 16px;
  text-align: center;
`;

export const CVDownload = styled.p`
  font-family: ${fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 14px;
  text-align: center;
`;

export const CVDownloadLink = PurpleTextLink;

export const DirectRow = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const DirectLabel = styled.p`
  font-family: ${fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
`;

export const DirectButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DirectBtn = styled.a`
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
