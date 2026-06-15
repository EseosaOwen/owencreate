import styled from '@emotion/styled';
import { tokens, fonts } from '../tokens';

// ─── Layout ───────────────────────────────────────────────────────────────────

export const SectionLight = styled.section`
  background: ${tokens.base};
  padding: 96px 32px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

export const SectionDark = styled.section`
  background: ${tokens.dark};
  padding: 96px 32px;

  @media (max-width: 768px) {
    padding: 72px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

// ─── Typography ───────────────────────────────────────────────────────────────

export const Eyebrow = styled.div`
  font-family: ${fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.purple};
  margin-bottom: 16px;
`;

export const SectionHeadline = styled.h2<{ dark?: boolean }>`
  font-family: ${fonts.display};
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  color: ${({ dark }) => (dark ? 'white' : tokens.textPrimary)};
  letter-spacing: -0.02em;
  line-height: 1.2;

  em {
    font-style: italic;
    color: ${tokens.purple};
  }
`;

// ─── Atomic UI ────────────────────────────────────────────────────────────────

export const PulseDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${tokens.purple};
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;
`;

export const LightPill = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: ${tokens.textPrimary};
  background: ${tokens.purpleTint};
  border-radius: 100px;
  padding: 3px 10px;
`;

export const DarkPill = styled.span`
  font-family: ${fonts.body};
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.07);
  border-radius: 100px;
  padding: 4px 10px;
`;

// ─── Buttons & links ──────────────────────────────────────────────────────────

export const PrimaryButton = styled.button`
  font-family: ${fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: white;
  background: ${tokens.dark};
  border-radius: 100px;
  padding: 14px 28px;
  white-space: nowrap;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;

export const GhostButton = styled.button`
  font-family: ${fonts.body};
  font-size: 14px;
  font-weight: 400;
  color: ${tokens.textPrimary};
  background: none;
  border: 0.5px solid ${tokens.textPrimary};
  border-radius: 100px;
  padding: 14px 28px;
  white-space: nowrap;
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const PurpleTextLink = styled.a`
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${tokens.purple};
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;
