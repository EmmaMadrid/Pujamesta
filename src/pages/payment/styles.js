import styled from 'styled-components';
import { BOX_SHADOWS, COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const StyledGrid = styled.div`
    padding: 2rem 0;
    & > :first-child {
        margin-bottom: 2rem;
    }
    @media screen and (min-width: 768px) {
        display: grid;
        gap: 2rem;
        grid-template-columns: 384px 1fr;
    }
    @media screen and (min-width: 960px) {
        display: grid;
        gap: 3rem;
        grid-template-columns: 32rem 1fr;
    }
`;

export const StyledTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
`;

export const StyledTitle = styled.h2`
    margin: 0 0 1rem;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 500;
    color: ${COLORS.accent300};
`;

export const StyledDetailsGrid = styled.div`
    width: min(100%, 46rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 3rem) minmax(3rem, auto);
    place-items: stretch stretch;
    gap: 1rem;
    @media screen and (min-width: 960px) {
        grid-template-rows: repeat(3, 4rem) minmax(4rem, auto);
    }
`;

export const StyledGridItem = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    border: 1px solid ${COLORS.gray300};
    border-radius: 0.5rem;
    @media screen and (min-width: 960px) {
        font-size: 1.5rem;
    }
`;

export const StyledCurrency = styled.span`
    color: ${COLORS.gray400};
`;

export const StyledPaymentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid ${COLORS.gray300};
    border-radius: 0.5rem;
    box-shadow: ${BOX_SHADOWS.default};
    background-color: ${COLORS.white};
`;

export const StyledButton = styled.button`
    background-color: ${COLORS.accent100};
    color: ${COLORS.white};
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.25rem;
    font-family: ${FONTS.primary};
    font-weight: 500;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    &:hover {
        background-color: ${COLORS.accent200};
    }
    &:disabled {
        background-color: ${COLORS.gray300};
        cursor: not-allowed;
    }
`;

export const StyledErrorMessage = styled.p`
    color: ${COLORS.warningForeground};
    margin-top: 1rem;
    font-size: 1rem;
    font-family: ${FONTS.primary};
`;
