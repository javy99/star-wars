import PropTypes from 'prop-types'

const EpisodesIcon = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1908 2.42123C10.7612 2.64816 10.2069 3.11861 9.95911 3.46666C9.71111 3.81493 9.40393 4.39906 9.27642 4.7652L9.04439 5.43065L8.64972 4.82779C8.43259 4.49613 7.94319 4.05739 7.56235 3.85239C7.18131 3.64761 6.55311 3.47986 6.1661 3.47986C5.7791 3.47986 5.10705 3.6623 4.67257 3.88539C4.23831 4.10827 3.72613 4.5634 3.53475 4.89655C3.34338 5.2297 3.12135 5.80872 3.04131 6.18359C2.93977 6.65809 3.02322 7.15345 3.31613 7.81549C3.60585 8.47029 3.99648 8.91563 4.57124 9.24644C5.37953 9.71157 5.39358 9.73903 5.01679 10.1158C4.66917 10.4634 4.62787 10.9084 4.62787 14.3035C4.62787 17.7133 4.66768 18.1382 5.01722 18.4546C5.2831 18.6951 5.7891 18.8069 6.61378 18.8069C7.27774 18.8069 7.82099 18.8531 7.82099 18.9095C7.82099 18.9661 7.43782 19.6384 6.96949 20.4034C6.50117 21.1685 6.11799 21.8408 6.11799 21.8974C6.11799 21.9538 6.44987 22 6.85539 22C7.50019 22 7.73074 21.8333 8.69485 20.6695C9.3009 19.9379 9.85608 19.3148 9.92867 19.2852C10.001 19.2554 10.5383 19.8508 11.1227 20.6078C12.0904 21.8621 12.2558 21.9851 12.9832 21.9921C13.4224 21.9966 13.7815 21.9538 13.7815 21.8974C13.7815 21.8408 13.3983 21.1685 12.93 20.4034C12.4617 19.6384 12.0785 18.9661 12.0785 18.9095C12.0785 18.8531 12.7931 18.8069 13.6668 18.8069C15.0266 18.8069 15.3174 18.7398 15.6891 18.3409C16.091 17.9096 16.1231 17.6041 16.1231 14.2271C16.1231 10.6889 16.1082 10.565 15.6305 10.116C15.3595 9.86143 14.9044 9.65282 14.6194 9.65218C14.1479 9.65111 14.1717 9.60769 14.8829 9.17321C15.3131 8.91031 15.8547 8.45241 16.0865 8.15566C16.3181 7.8587 16.6166 7.2122 16.7494 6.71876C16.9297 6.04948 16.9297 5.5935 16.7494 4.92422C16.6166 4.43077 16.3181 3.78427 16.0865 3.48731C15.8547 3.19056 15.3131 2.73267 14.8829 2.46977C14.3392 2.13747 13.7764 1.99442 13.0364 2.00017C12.4085 2.00506 11.6517 2.1777 11.1908 2.42123ZM14.3686 3.90561C14.4003 3.90561 14.6162 4.21684 14.8482 4.59746C15.0802 4.97808 15.2701 5.52878 15.2701 5.82149C15.2701 6.11419 15.0824 6.66128 14.8531 7.03743C14.5904 7.46808 14.1774 7.78973 13.7364 7.90703C13.3515 8.00942 12.7491 8.01495 12.3978 7.91895C12.0466 7.82315 11.5331 7.48617 11.257 7.17005C10.8447 6.69811 10.7734 6.42882 10.8591 5.66737C10.9166 5.15732 11.135 4.55062 11.3441 4.31944C11.5533 4.08826 12.0197 3.82046 12.3806 3.72446C12.7412 3.62845 13.3232 3.62973 13.6736 3.72765C14.0242 3.82557 14.3369 3.90561 14.3686 3.90561ZM7.18237 5.60861C7.41653 5.84278 7.60812 6.2632 7.60812 6.54292C7.60812 6.82264 7.43228 7.26883 7.21728 7.53428C6.94054 7.87595 6.61463 8.01091 6.10139 7.99643C5.63179 7.98302 5.24435 7.81293 5.0021 7.51363C4.79625 7.25946 4.62787 6.82264 4.62787 6.54292C4.62787 6.2632 4.81946 5.84278 5.05362 5.60861C5.29012 5.37211 5.76313 5.18286 6.11799 5.18286C6.47286 5.18286 6.94587 5.37211 7.18237 5.60861ZM10.1037 8.37514C10.3638 8.69445 10.8907 9.11062 11.2745 9.29966C11.9589 9.63706 11.9254 9.64366 9.52783 9.64835L7.0836 9.65324L7.86336 9.1234C8.32636 8.80877 8.75616 8.28105 8.92113 7.82507C9.16019 7.16367 9.22895 7.10811 9.41479 7.4255C9.53336 7.62837 9.84331 8.05561 10.1037 8.37514ZM18.6297 10.7798L16.7724 11.8884L16.7707 14.2301L16.7688 16.5717L18.6346 17.6893C19.6607 18.3041 20.5692 18.8069 20.6533 18.8069C20.7376 18.8069 20.8064 16.7473 20.8064 14.2301C20.8064 11.7128 20.7344 9.65729 20.6467 9.66218C20.559 9.66708 19.6513 10.1701 18.6297 10.7798Z"
        fill={color}
      />
    </svg>
  )
}

EpisodesIcon.propTypes = {
  color: PropTypes.string.isRequired,
}

EpisodesIcon.defaultProps = {
  color: 'white',
}

export default EpisodesIcon