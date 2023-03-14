import { MagnifyingGlass, Trash } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import useDebounce from '../../../hooks/useDebounce';
import Button from '../../ui/Button';
import Header from '../../ui/Header';
import Input from '../../ui/Input';
import ShareScreenModal from '../ShareScreenModal';
import { ActionsContainer, FilterContainer } from './styled';

export const HeaderSearch = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<string>(
    searchParams.get('filter') || ''
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const debouncedSearch = useDebounce(params, 500);

  const handleSearch = () => {
    if (debouncedSearch === '' && location.search !== '?filter=') {
      setSearchParams('');
      return;
    }

    return setSearchParams(`?filter=${debouncedSearch}`);
  };

  const toggleModal = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedSearch]);

  return (
    <>
      <Header>
        <Header.Title>
          {location.pathname.slice(1)} <span>page</span>
        </Header.Title>
        <FilterContainer>
          <Input
            icon={<MagnifyingGlass size={22} />}
            id='filter'
            type='text'
            isSearch
            autoFocus={location.search === '?filter='}
            value={params || ''}
            onChange={({ target: { value } }) => {
              setParams(value);
            }}
          />
        </FilterContainer>
        <ActionsContainer>
          {params && (
            <>
              <Button
                variant='danger'
                size='small'
                onClick={() => {
                  setParams('');
                }}
              >
                <Trash size={22} />
              </Button>
              <Button variant='primary' size='small' onClick={toggleModal}>
                Share
              </Button>
            </>
          )}
        </ActionsContainer>
      </Header>

      <ShareScreenModal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
};

export default HeaderSearch;
