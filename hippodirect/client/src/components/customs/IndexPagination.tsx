import { Button } from '../ui/button';

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const IndexPagination = ({ page, setPage }: Props) => {
  const next_page = async () => {
    setPage(page + 1);
  };

  const prev_page = async () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="w-full flex items-center justify-between my-8 px-4 pr-9">
      <Button
        variant="ghost"
        onClick={prev_page}
        className="mx-1 h-10 px-5  transition-colors duration-150 rounded-l "
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </Button>

      <Button
        variant="ghost"
        onClick={next_page}
        className="mx-1 h-10 px-5  transition-colors duration-150 rounded-r "
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default IndexPagination;
