import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { SEED_CONTACTS } from './seed-contacts';
import { v4 as uuidv4 } from 'uuid';

let contacts: Contact[] = SEED_CONTACTS;

@Injectable()
export class ContactsService {
  create(createContactDto: CreateContactDto) {
    const newContact = createContactDto;
    newContact.login = {
      uuid: uuidv4(),
    };
    contacts = [newContact, ...contacts];
    return {
      contact: newContact,
    };
  }

  findAll() {
    return { contacts };
  }

  findOne(uuid: string) {
    const contact = contacts.find((item) => item.login.uuid === uuid);
    return {
      contact,
    };
  }

  update(uuid: string, updateContactDto: UpdateContactDto) {
    let index = -1;
    contacts = contacts.map((item, idx) => {
      if (item.login.uuid === uuid) {
        index = idx;
        return {
          ...item,
          ...updateContactDto,
        };
      }
      return item;
    });
    return {
      contact: contacts[index],
    };
  }

  remove(uuid: string) {
    const matching = contacts.find((item) => item.login.uuid === uuid);
    contacts = contacts.filter((item) => item.login.uuid !== uuid);
    return matching;
  }
}
