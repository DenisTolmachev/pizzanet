import ContentLoader from 'react-content-loader';

export const Skeleton = props => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f7f7f7'
    foregroundColor='#f3f1f3'
    {...props}
  >
    <circle cx='97' cy='62' r='178' />
    <rect x='0' y='263' rx='10' ry='10' width='280' height='27' />
    <rect x='0' y='308' rx='10' ry='10' width='280' height='88' />
    <rect x='5' y='415' rx='10' ry='10' width='90' height='45' />
    <rect x='154' y='426' rx='0' ry='0' width='1' height='0' />
    <rect x='132' y='415' rx='10' ry='10' width='145' height='45' />
  </ContentLoader>
);
